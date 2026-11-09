import { event } from "@/data/wedding-data";
import Countdown from "@/components/ui/Countdown";

export default function CuentaRegresiva() {
    return (
        <section id="countdown" className="scroll-mt-24 bg-coffee py-24">
            <div className="mx-auto max-w-6xl px-6 text-center">
                <p className="font-sans text-[11px] uppercase tracking-[0.45em] text-terracotta">
                    Cuenta regresiva
                </p>

                <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-cream md:text-5xl">
                    Falta poco para el gran día
                </h2>

                <div className="mx-auto mt-8 h-px w-16 bg-terracotta/60" />

                <Countdown targetDate={event.dateIso}/>
            </div>
        </section>
    )
}