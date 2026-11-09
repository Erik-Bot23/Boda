import Image from "next/image";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { galleryPhotos } from "@/data/wedding-data";

//Recuadros que se muestran mientras no hay fotos reales
const PLACEHOLDER_COUNT = 6;

export default function Galeria(){
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

                <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
                    {galleryPhotos.length > 0 ? galleryPhotos.map((photo) => (
                        <figure
                            key={photo.src}
                            className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-sand/20">
                                <Image 
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    sizes="(min-width: 768px) 33vw, 50vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"/>
                        </figure>
                    )) : Array.from({ length: PLACEHOLDER_COUNT }).map((_,index) => (
                        <PhotoPlaceholder
                            key={index}
                            label={`Foto ${String(index + 1).padStart(2, "0")}`}
                            className="aspect-[4/5] w-full rounded-xl"/>
                    ))}
                </div>
            </div>
        </section>
    );
}