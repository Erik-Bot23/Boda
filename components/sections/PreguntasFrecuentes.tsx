import { faqItems } from "@/data/wedding-data";

export default function PreguntasFrecuentes(){
    return (
        <section id="faq" className="scroll-mt-24 bg-coffee py-24">
            <div className="mx-auto max-w-3xl px-6">
                <div className="text-center">
                    <p className="font-sans text-[11px] uppercase tracking-[0.45em] text-terracotta">
                        Preguntas frecuentes
                    </p>

                    <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-cream md:text-5xl">
                        Antes de venir
                    </h2>

                    <div className="mx-auto mt-8 h-px w-16 bg-terracotta/60" />

                    <p className="mx-auto mt-8 max-w-xl font-sans text-base leading-relaxed text-cream/70">
                        Lo que más nos preguntan. Si tu duda no está aquí, escríbenos con confianza.
                    </p>
                </div>

                {/*divide-y separa cada pregunta con una línea; border-y cierra arriba y abajo */}
                <div className="mt-14 divide-y divide-cream/15 border-y border-cream/15">
                    {faqItems.map((item) => (
                        <details key={item.question} className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-sans text-base text-cream transition-colors duration-300 hover:text-terracotta [&::-webkit-details-marker]:hidden">
                                <span>
                                    {item.question}
                                </span>

                                {/*El + gira 45° y se ve como "x" cuando está abierto */}
                                <span
                                    aria-hidden="true"
                                    className="shrink-0 font-serif text-2xl leading-none text-terracotta transition-transform duration-300 group-open:rotate-45">
                                        +
                                </span>
                            </summary>

                            <p className="pb-6 pr-10 font-sans text-sm leading-relaxed text-cream/70">
                                {item.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}