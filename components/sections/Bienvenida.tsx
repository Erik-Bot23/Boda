import { couple, welcome } from "@/data/wedding-data";

export default function Bienvenida() {
    return (
        <section id="bienvenida" className="scroll-mt-24 bg-cream py-24">
            <div className="mx-auto max-w-3xl px-6 text-center">
                <p className="font-sans text-[11px] uppercase tracking-[0.45em] text-terracotta">
                    {welcome.kicker}
                </p>
                
                <h2 className="mt-6 font-serif text-3xl leading-[1.2] text-coffee md:text-4xl">
                    {welcome.title}
                </h2>

                {/*Ornamento: línea, rombo, línea */}
                <div className="mt-8 flex items-center justify-center gap-4" aria-hidden="true">
                    <span className="h-px w-12 bg-sand" />
                    <span className="h-1.5 w-1.5 rotate-45 bg-terracotta"/>
                    <span className="h-px w-12 bg-sand"/>
                </div>

                <p className="mx-auto mt-8 max-w-2xl font-sans text-base leading-relaxed text-ink/80 md:text-lg">
                    {welcome.message}
                </p>

                <p className="mt-10 font-serif text-2xl italic text-terracotta">
                    {couple.groom} &amp; {couple.bride}
                </p>
            </div>
        </section>
    );
}