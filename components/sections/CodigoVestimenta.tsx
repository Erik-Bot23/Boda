import Image from "next/image";
import { dressCode } from "@/data/wedding-data";

//Los dos looks a un arreglo: si algún día hay un tercero, se agrega aquí
const looks = [dressCode.groom, dressCode.bride]

export default function CodigoVestimenta(){
    return (
        <section id="vestimenta" className="scroll-mt-24 bg-cream py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <p className="font-sans text-[11px] uppercase tracking-[0.45em] text-terracotta">
                        Código de vestimenta
                    </p>

                    <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-coffee md:text-5xl">
                        {dressCode.title}
                    </h2>

                    <div className="mx-auto mt-8 h-px w-16 bg-sand/60"/>

                    <p className="mx-auto mt-8  max-w-xl font-sans text-base leading-relaxed text-ink/80">
                        {dressCode.description}
                    </p>
                </div>

                <div className="mt-14 grid gap-8 md:grid-cols-2">
                    {looks.map((look) => (
                        <figure
                            key={look.label}
                            className="group overflow-hidden rounded-2xl border border-sand/60 bg-sand/10">
                                {/*'relative' + proporción fija: es lo que exige Image con 'fill'*/}
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={look.image}
                                        alt={look.alt}
                                        fill
                                        sizes="(min-width: 768px) 472px, 90vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"/>
                                </div>

                                {/*La descripción va pegada a su imagen, como una sola pieza*/}
                                <figcaption className="px-6 py-7 text-center">
                                    <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta">
                                        {look.label}
                                    </p>

                                    <p className="mt-3 font-serif text-2xl text-coffee">
                                        {look.title}
                                    </p>

                                    <p className="mt-2 font-sans text-sm leading-relaxed text-ink/70">
                                        {look.note}
                                    </p>
                                </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}