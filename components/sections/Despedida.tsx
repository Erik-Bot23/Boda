import { couple, farewell } from "@/data/wedding-data";

export default function Despedida() {
    return (
        <section id="despedida" className="scroll-mt-24 bg-linear-to-b from-coffee to-ink py-24">
            <div className="mx-auto max-w-3xl px-6 text-center">
                <p className="font-sans text-[11px] uppercase tracking-[0.45em] text-terracotta">
                    {farewell.kicker}
                </p>

                <h2 className="mt-6 font-serif text-3xl leading-[1.2] text-cream md:text-4xl">
                    {farewell.title}
                </h2>

                <div className="mx-auto mt-8 h-px w-16 bg-terracotta/60" />

                <p className="mx-auto mt-8 max-w-2xl font-sans text-base leading-relaxed text-cream/75 md:text-lg">
                    {farewell.message}
                </p>

                <p className="mt-10 font-serif text-2xl italic text-terracotta">
                    {couple.groom} &amp; {couple.bride}
                </p>
            </div>
        </section>
    );
}