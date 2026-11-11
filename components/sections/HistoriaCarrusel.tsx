"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { type HistoryPhoto } from "@/data/wedding-data";

type Props = {
    photos: HistoryPhoto[];
    //Tiempo entre fotos, en milisegundos
    intervalo?: number;
};

//React trae un hook para suscribirse a fuentes externas, como macthMedia.
//Es la forma recomendada de leer "prefers-reduced-motion" sin usar un efecto.
const QUERY_REDUCIR = "(prefers-reduced-motion: reduce)";

function getSnapshot() {
    return window.matchMedia(QUERY_REDUCIR).matches;
}

//En el servidor no existe window: se asume "sin reducir" y el navegador lo corrige al hidratar
function getServerSnapshot(){
    return false;
}

function subscribe(callback: () => void){
    const mq = window.matchMedia(QUERY_REDUCIR);
    mq.addEventListener("change", callback);
    return () => mq.removeEventListener("change", callback);
}

export default function HistoriaCarrusel({photos, intervalo = 4000}: Props){
    const [activa, setActiva] = useState(0);
    const [pausado, setPausado] = useState(false);

    //lee la preferencia del sistema sin efectos ni doble render
    const reducir = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    //Avanza de forma circular: 0, 1, 0, 1 ...
    const siguiente = useCallback(() => {
        setActiva((i) => (i + 1) % photos.length);
    }, [photos.length]);

    //El reloj 'activa' está en las dependencias: el temporizador se reinicia
    //después de cada cambio, automático o manual.
    useEffect(() => {
        if (pausado || reducir || photos.length <= 1) return;

        const id = setInterval(siguiente, intervalo);
        return () => clearInterval(id);
    }, [activa, pausado, reducir, photos.length, intervalo, siguiente]);

    return (
        <div
            className="relative"
            onMouseEnter={() => setPausado(true)}
            onMouseLeave={() => setPausado(false)}
            onFocus={() => setPausado(true)}
            onBlur={(event) => {
                //Solo reanuda si el foco salió del carrusel por completo;
                //si pasa de la foto a un punto, no cuenta como salida
                if(!event.currentTarget.contains(event.relatedTarget as Node | null)){
                    setPausado(false);
                }
            }}>

                {/*Todas las fotos viven apiladas; solo cambia la opacidad*/}
                <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-sand/50 md:h-[400px]">
                    {photos.map((photo, index) => (
                        <figure
                            key={photo.src}
                            aria-hidden={index === activa ? undefined : true}
                            className={`absolute inset-0 ${reducir ? "transition-none" : "transition-opacity duration-1000"} 
                            ${index === activa ? "opacity-100" : "opacity-0"}`}>
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="object-cover"/>
                                {/*Degradado para que la descripción se lea sobre la foto*/}
                                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/70 to-transparent" />

                                {/*Va dentro de la imagen de la figura: se desvanece junto con la foto*/}
                                <figcaption className="absolute inset-x-0 bottom-0 p-5 font-sans text-sm leading-relaxed text-cream">
                                    {photo.caption}
                                </figcaption>
                        </figure>
                    ))}
                </div>

                {/*Puntos: botones de verdad, así que se manejan con Tab + Enter*/}
                <div className="mt-5 flex justify-center gap-2">
                    {photos.map((photo, index) => (
                        <button 
                            key={photo.src}
                            type="button"
                            onClick={() => setActiva(index)}
                            aria-label={`Ver foto ${index + 1} de ${photos.length}`}
                            aria-current={index === activa ? "true" : undefined}
                            className={`h-2 rounded-full transition-all duration-300 
                                ${index === activa ? "w-6 bg-terracotta" : "w-2 bg-sand hover:bg-sand/60"}`}/>
                    ))}
                </div>
        </div>
    );
}