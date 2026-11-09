import Image from "next/image";
import { hotels } from "@/data/wedding-data";

export default function Hospedaje(){
    return (
        <section id="hospedaje" className="scroll-mt-24 bg-sand/15 py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <p className="font-sans text-[11px] uppercase tracking-[0.45em] text-terracotta">
                        Hospedaje
                    </p>

                    <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-coffee md:text-5xl">
                        ¿Dónde quedarte?
                    </h2>

                    <div className="mx-auto mt-8 h-px w-16 bg-sand/60" />

                    <p className="mx-auto mt-8 max-w-xl font-sans text-base leading-relaxed text-ink/80">
                        Estamos preparando una lista de opciones cercanas al lugar del
                        evento para que elijas la que mejor se acomode a ti.
                    </p>
                </div>

                {hotels.length > 0 ? (
                    <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {hotels.map((hotel) => (
                            <li
                                key={hotel.name}
                                className="flex flex-col rounded-2xl border border-sand/60 bg-cream p-6">
                                    <h3 className="font-serif text-2xl leading-snug text-coffee">
                                        {hotel.name}
                                    </h3>

                                    <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-ink/70">
                                        {hotel.note}
                                    </p>

                                    {hotel.url ? (
                                        <a
                                            href={hotel.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-5 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-terracotta transition-colors duration-300 hover:text-cinnamon">
                                                Ver sitio
                                                <span aria-hidden="true"> 
                                                    <Image src="/icons/derecha.png" alt="" width={16} height={16} className="h-4 w-4 object-contain transition-transform duration-300 group-open:rotate-90"/>
                                                </span>
                                        </a>
                                    ) : null}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="mx-auto mt-12 max-w-md rounded-2xl border border-dashed border-sand bg-cream/60 px-6 py-10 text-center">
                        <p className="font-sans text-sm leading-relaxed text-ink/60">
                             Muy pronto compartiremos recomendaciones de hoteles cercanos.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}