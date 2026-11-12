import { site } from "@/data/wedding-data";

export default function Footer() {
    return (
        <footer className="border-t border-sand/15 bg-ink">
            <div className="mx-auto max-w-6xl px-6 py-16">
                {/*Contacto de desarrollo*/}
                <div className="mx-auto mt-12 max-w-2xl text-center">
                    <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta">
                        {site.developer.role}
                    </p>

                    <p className="mt-4 font-serif text-2xl leading-snug text-cream">
                        {site.developer.name}
                    </p>

                    {site.developer.collaborator ? (
                            <p className="mt-1 font-serif text-2xl leading-snug text-cream">
                                {site.developer.collaborator}
                            </p>
                        ) :  null}

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-sans text-sm">
                        <a
                            href={`mailto:${site.developer.email}`}
                            className="inline-flex items-center gap-2 text-sand transition-colors duration-300 hover:text-cream">
                                <svg
                                    viewBox=" 0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth={1.5} 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                    aria-hidden="true">
                                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                                        <path d="m22 7-10 6L2 7"/>
                                </svg>
                                {site.developer.email}
                        </a>

                        <span
                            aria-hidden="true"
                            className="hidden h-1 w-1 rounded-full bg-sand/50 sm:block"/>

                        <a 
                            href={`tel:${site.developer.phone}`}
                            className="inline-flex items-center gap-2 text-sand transition-colors duration-300 hover:text-cream">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                    aria-hidden="true">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                {site.developer.phone}
                        </a>
                    </div>
                    {site.developer.location ? (
                        <p className="mt-4 font-sans text-xs text-sand/60">
                            {site.developer.location}
                        </p>
                    ) : null}
                </div>
                
                <div className="mx-auto mt-12 h-px w-24 bg-sand/40" />
                
                {/*Cierr*/}
                <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="font-sans text-xs text-sand/60">
                        {site.note}
                    </p>

                    <a
                        href="#inicio"
                        className="font-sans text-[10px] uppercase tracking-[0.25em] text-sand transition-colors duration-300 hover:text-cream">
                            Volver arriba
                    </a>
                </div>
            </div>
        </footer>
    );
}