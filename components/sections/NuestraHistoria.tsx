import Image from "next/image";
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

                            {/*Divisor alineado a la izquierda */}
                            <div className="mt-8 h-px w-16 bg-sand/60"/>

                            <p className="mt-8 font-sans text-lg leading-relaxed text-ink/90">
                                Nos conocimos en una tarde de lluvia de 2020, cuando ninguno
                                de los dos esperaba encontrar algo así. Desde entonces, cada
                                momento compartido se ha convertido en nuestro lugar favorito.
                                Hoy queremos invitarte a caminar con nosotros el siguiente
                                tramo de este camino.
                            </p>

                            {/*
                               <details> es un elemento nativo de HTML:
                                abre y cierra sin JavaScript, y ya es accesible con teclado.
                                Por eso no hace falta convertir esta sección en client component.
                            */}
                            <details className="group mt-10">
                                <summary className="inline-flex cursor-pointer list-none items-center gap-3 rounded-full border border-terracotta bg-transparent px-7 py-3 font-sans text-xs uppercase tracking-[0.2em] text-terracotta transition-colors duration-300 hover:border-cinnamon hover:bg-terracotta/10 hover:text-cinnamon [&::-webkit-details-marker]:hidden">
                                    <span className="group-open:hidden">
                                        Ver nuestra historia completa
                                    </span>
                                    <span className="hidden group-open:inline">
                                        Ver menos
                                    </span>

                                    <Image src="/icons/derecha.png" alt="" width={16} height={16} className="h-4 w-4 object-contain transition-transform duration-300 group-open:rotate-90"/>
                                </summary>

                                <div className="mt-6 space-y-4 border-l-2 border-sand/60 pl-6 font-sans text-base leading-relaxed text-ink/80">
                                    <p>
                                        Todo empezó con una conversación que se alargó hasta
                                        la madrugada. Entre risas, planes y cafés, nos dimos
                                        cuenta de que queríamos seguir contándonos la vida.
                                    </p>
                                    <p>
                                        Desde entonces hemos aprendido que el amor también
                                        está en las cosas pequeñas: una llamada a media tarde,
                                        un plato compartido, una mano que se busca sin pensar.
                                    </p>
                                    <p>
                                        Hoy, después de todo ese camino, elegimos celebrar
                                        juntos el comienzo de una nueva etapa. Y queremos que
                                        tú estés ahí.
                                    </p>
                                </div>
                            </details>
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