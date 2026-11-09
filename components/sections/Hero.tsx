import Image from "next/image";
//import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { couple, event, featuredPhotos } from "@/data/wedding-data";


export default function Hero() {
    return (
        <section id="inicio" className="relative flex min-h-svh items-center justify-center overflow-hidden">
            {/*Fondo: hoy un placeholder, después la foto real*/}
            <div className="absolute inset-0">
                <Image 
                    src={featuredPhotos.hero}
                    alt="Sonia y David"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"/>
                <div className="absolute inset-0 bg-linear-to-b from-ink/70 via-ink/45 to-ink/80"/>
            </div>

            {/*Contenido: texto y botones*/}
            <div className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-28 text-center text-white">
                <p className="font-sans text-[11px] uppercase tracking-[0.45em] text-cream/80">
                    ¡Nos casamos!
                </p>

                <h1 className="mt-8 font-serif text-5xl leading-[0.95] sm:text-8xl lg:text-9xl">
                    {couple.groom}
                    <span className="mx-2 inline-block italic text-sand md:mx-4">
                        &
                    </span>
                    {couple.bride}
                </h1>

                <div className="mx-auto mt-10 h-px w-20 bg-sand/70"/>

                <p className="mt-10 font-sans text-xs uppercase tracking-[0.35em] text-cream">
                    {event.dateLabel}
                </p>
                <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.3em] text-cream/80">
                    {event.timeLabel}
                </p>
                <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.3em] text-cream/70">
                    {event.city}
                </p>
            </div>

            {/*Indicador para bajar */}
            <a href="#historia" aria-label="Ir a nuestra historia" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/60 transition-colors duration-300 hover:text-cream">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1}
                    className="h-8 w-8"
                    aria-hidden="true">
                        <path 
                            d="M12 4v14m0 0l-5-5m5 5l5-5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                </svg>
            </a>
        </section>
    )
}