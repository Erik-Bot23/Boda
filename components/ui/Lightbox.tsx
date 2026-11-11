"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { type GalleryPhoto } from "@/data/wedding-data";

type Props = {
    photos: GalleryPhoto[];
    index: number | null; 
    onClose: () => void;
    onNavigate: (index: number) => void;
}

export default function Lightbox({ photos, index, onClose, onNavigate }: Props){
    const ref = useRef<HTMLDialogElement>(null);

    //Abre o cierra el diálogo según el índice
    useEffect(() => {
        const dialog = ref.current;
        if(!dialog) return;

        if(index !== null && !dialog.open){
            dialog.showModal();
            document.body.style.overflow = "hidden";
        }

        if(index === null && dialog.open){
            dialog.close();
            document.body.style.overflow = "";
        }
    }, [index]);

    //Flechas del teclado para pasar de foto
    useEffect(() => {
        if(index === null) return;

        const onKey = (event: KeyboardEvent) => {
            if(event.key === "ArrowRight") onNavigate((index + 1) % photos.length);
            if(event.key === "ArrowLeft") onNavigate((index - 1 + photos.length) % photos.length);
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
        
    }, [index, photos.length, onNavigate]);

    return (
        <dialog
            ref={ref}
            onClose={onClose}
            onClick={(event) => { if(event.target === event.currentTarget) onClose(); }}
            className="m-auto w-full max-w-5xl rounded border border-cream/10 bg-ink/95 p-0 backdrop:bg-ink/80 backdrop:backdrop-blur-sm">
                {index !== null ? (
                    <figure className="relative">
                        <div className="relative aspect-[16/10] w-full">
                            <Image
                                src={photos[index].src}
                                alt={photos[index].alt}
                                fill
                                sizes="90vw"
                                className="object-cover"/>
                        </div>

                        {/*Degradado para leer el texto sobre la foto*/}
                        <div className="pointer-events-none obsolute inset-0 bg-linear-to-t from-ink/70 to-transparent"/>

                        <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-4 font-sans text-sm text-cream">
                            <span> { photos[index].caption ?? photos[index].alt } </span>

                            <button
                                type="button"
                                onClick={onClose}
                                className="shrink-0 rounded-full border border-cream/30 bg-ink/40 px-4 py-1.5 font-sans text-[10px] uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:border-cream hover:bg-cream hover:text-ink">
                                    Cerrar
                            </button>
                        </figcaption>
                    </figure>
                ) : null}
        </dialog>
    );
}