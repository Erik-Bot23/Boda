"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { couple, event, music } from "@/data/wedding-data";

const QUERY_REDUCIR = "(prefers-reduced-motion: reduce)"

function getSnapshot() {
    return window.matchMedia(QUERY_REDUCIR).matches;
}

function getServerSnapshot(){
    return false;
}

function subscribe(callback:() => void){
    const mq = window.matchMedia(QUERY_REDUCIR);
    mq.addEventListener("change", callback);
    return () => mq.removeEventListener("change", callback);
}

export default function Cortina({ children }: { children: ReactNode }){
    const audioRef = useRef<HTMLAudioElement>(null);
    const [mostrar, setMostrar] = useState(true);
    const [abierta, setAbierta] = useState(false);
    const reducir = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    //Mientras la cortina está arriba, la página no se puede desplazar
    useEffect(() =>{
        document.body.style.overflow = mostrar ? "hidden" : "";
    }, [mostrar]);

    const entrar = useCallback(() => {
        //El clic es el gesto que desbloquea el autoplay
        const audio = audioRef.current;

        if(audio){
            audio.volume = 0.6;
            audio.play().catch(() => {});
        }

        setAbierta(true);
        window.setTimeout(() => setMostrar(false), reducir ? 0 : 1000);
    }, [reducir]);

    return (
        <>
            {children}

            {mostrar ? (
                <button
                    type="button"
                    onClick={entrar}
                    aria-label="Entrar a la invitación"
                    className={`cortina fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center gap-6 bg-ink px-6 text-center
                    ${reducir ? "transition-none" : "transition-opacity duration-1000"}
                    ${abierta ? "pointer-events-none opacity-0" : "opacity-100"}`}>
                        <span className="font-sans text-[11px] uppercase tracking-[0.45em] text-terracotta">
                            Nuestra boda
                        </span>

                        <span className="font-serif text-5xl leading-none text-cream md:text-7xl">
                            {couple.groom} &amp; {couple.bride}
                        </span>

                        <span className="h-px w-16 bg-terracotta/60" />

                        <span className="font-sans text-xs uppercase tracking-[0.3em] text-sand">
                            {event.dateLabel}
                        </span>

                        <span className="mt-6 inline-flex items-center gap-3 rounded-full border border-cream/40 px-8 py-3 font-sans text-[11px] uppercase tracking-[0.25em] text-cream">
                            Entrar
                        </span>
                </button>
            ) : null}
            <audio ref={audioRef} src={music.src} loop preload="none" />
        </>
    );
}