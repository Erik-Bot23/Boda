import { ceremony, reception } from "@/data/wedding-data";

export default function ElGranDia(){
    const venue = ceremony;
    const mapsUrl = venue.mapsUrl;

    return (
        <section id="gran-dia" className="scroll-mt-24 bg-cream py-24">
            <div className="mx-auto max-w-4xl px-6">
                <div className="text-center">
                    <p className="font-sans text-[11px] uppercase tracking-[0.45em] text-terracotta">
                        El gran día
                    </p>

                    <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-coffee md:text-5xl">
                        Ceremonia y recepción
                    </h2>

                    <div className="mx-auto mt-8 h-px w-16 bg-sand/60" />
                </div>

                <div className="mt-14 rounded-xl border border-sand/60 bg-sand/15 px-6 py-12 text-center md:px-12">
                    <h3 className="font-serif text-3xl text-coffee md:text-4xl">
                        {venue.name}
                    </h3>

                    <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-ink/80">
                        {venue.address}
                    </p>

                    <dl className="mx-auto mt-10 grid max-w-md gap-8 sm:grid-cols-2">
                        <div>
                            <dt className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta">
                                Ceremonia
                            </dt>
                            <dd className="mt-2 font-serif text-2xl text-coffee">
                                {ceremony.time}
                            </dd>
                        </div>

                        <div>
                            <dt className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta">
                                Recepción
                            </dt>
                            <dd className="mt-2 font-serif text-2xl text-coffee">
                                {reception.time}
                            </dd>
                        </div>
                    </dl>

                    <div className="mt-10">
                        {mapsUrl ? (
                            <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 rounded-full bg-terracotta px-7 py-3 font-sans text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-cinnamon">
                                    Cómo llegar
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                        className="h-4 w-4"
                                        aria-hidden="true">
                                            <path 
                                                d="M7 17L17 7M17 7H9M17 7v8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                    </svg>
                            </a>
                        ) : (
                            <p className="font-sans text-xs uppercase tracking-[0.2em] text-ink/50">
                                Ubicación próximamente
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}