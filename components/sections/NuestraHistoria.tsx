import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

export default function NuestraHistoria(){
    return (
        <section
            id="historia"
            className="scroll-mt-24 bg-cream py-24">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid gap-12 items-center md:grid-cols-2">
                        <div>
                            <h2 className="font-serif text-4xl text-coffee leading-[1.1] md:text-5xl">
                                Nuestra historia
                            </h2>

                            <div className="mx-0 mt-8 h-px w-full bg-sand/40 md:mx-16 md:w-[60%]"/>

                            <p className="mt-8 font-sans text-lg leading-relaxed text-ink/90">
                                Nos conocimos en una tarde de lluvia de 2020, cuando ninguno
                                de los dos esperaba encontrar algo así. Desde entonces, cada
                                momento compartido se ha convertido en nuestro lugar favorito.
                                Hoy queremos invitarte a caminar con nosotros el siguiente
                                tramo de este camino.
                            </p>

                            <button className="mt-10 inline-flex items-center gap-2 rounded-full border border-terracotta bg-transparent px-7 py-3 font-sans text-xs uppercase tracking-[0.2em] text-terracotta transition-colors duration-300 hover:bg-terracotta hover:text-white">
                                Ver nuestra historia completa<span aria-hidden="true">Ingresar</span>
                            </button>
                        </div>

                        <div className="relative">
                            <PhotoPlaceholder label="Foto de la pareja" className="h-80 w-full rounded-2xl md:h-[400px]"/>
                            <div className="absolute -inset-px rounded-2xl border border-sand/50 pointer-events-none"/>
                        </div>
                    </div>
                </div>
        </section>
    );
}