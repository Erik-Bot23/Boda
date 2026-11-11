"use client"

import Image from "next/image";
import { useCallback, useState } from "react";
import Lightbox from "@/components/ui/Lightbox";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { galleryPhotos } from "@/data/wedding-data";

//Traduce la palabra de los datos a clases de Tailwind
const clasesDeTamano = {
    normal: "",
    ancho: "col-span-2",
    alto: "row-span-2",
    grande: "col-span-2 row-span-2"
} as const;

//Recuadros que se muestran mientras no hay fotos reales
const PLACEHOLDER_COUNT = 6;

export default function Galeria(){
    const [indice, setIndice] = useState<number | null>(null);

    //useCallback para que el lightbox no vuelva a suscribirse a cada render
    const cerrar = useCallback(() => setIndice(null), []);
    const navegar = useCallback((nuevo: number) => setIndice(nuevo), []);

    return (
        <section id="galeria" className="scroll-mt-24 bg-cream py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <p className="font-sans text-[11px] uppercase tracking-[0.45em] text-terracotta">
                        Galería
                    </p>
                    <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-coffee md:text-5xl">
                        Nuestros momentos
                    </h2>

                    <div className="mx-auto mt-8 h-px w-16 bg-sand/60" />
                    
                    <p className="mx-auto mt-8 max-w-xl font-sans text-base leading-relaxed text-ink/80">
                        Una pequeña selección de los instantes que nos trajeron hasta aquí.
                    </p>
                </div>

                {/*
                    auto-rows fija la altura de cada fila; los span multiplican.
                    [grid-auto-flow:dense] rellena los huecos con las fotos siguientes
                    en vez de dejar espacios vacíos.
                */}
                <div className="mt-14 grid grid-cols-2 gap-3 auto-rows-[180px] md:grid-cols-4 md:auto-rows-[220px] md:gap-4 [grid-auto-flow:dense]">
                    {galleryPhotos.length > 0 ? galleryPhotos.map((photo, index) => (
                        <button
                            key={photo.src}
                            type="button"
                            onClick={() => setIndice(index)}
                            aria-label={`Ampliar: ${photo.alt}`}
                            className={`group relative overflow-hidden rounded-xl bg-sand/20 ${clasesDeTamano[photo.size ?? "normal"]}`}>
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    sizes="(min-width: 768px) 25vw, 50vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"/>
                        </button>
                    )) : Array.from({ length: PLACEHOLDER_COUNT }).map((_,index) => (
                        <PhotoPlaceholder
                            key={index}
                            label={`Foto ${String(index + 1).padStart(2, "0")}`}
                            className="w-full rounded-xl"/>
                    ))}
                </div>
            </div>
            <Lightbox photos={galleryPhotos} index={indice} onClose={cerrar} onNavigate={navegar} />
        </section>
    );
}