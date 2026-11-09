import { dressCode } from "@/data/wedding-data";

export default function CodigoVestimenta(){
    return (
        <section id="vestimenta" className="scroll-mt-24 bg-cream py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
                    <div className="text-center md:text-left">
                        <p className="font-sans text-[11px] uppercase tracking-[0.45em] text-terracotta">
                            Código de vestimenta
                        </p>

                        <h2 className="mt-6 font-serif text-5xl leading-[1.05] text-coffee md:text-6xl">
                            {dressCode.title}
                        </h2>

                        <div className="mx-auto mt-8 h-px w-16 bg-sand/60 md:mx-0"/>
                    </div>

                    <div className="rounded-2xl border border-sand/60 bg-sand/10 px-8 py-10 text-center md:text-left">
                        <p className="font-sans text-base leading-relaxed text-ink/80">
                            {dressCode.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}