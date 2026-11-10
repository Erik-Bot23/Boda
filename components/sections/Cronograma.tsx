import { schedule } from "@/data/wedding-data";

export default function Cronograma(){
    return (
        <section id="cronograma" className="scroll-mt-24 bg-cream py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <p className="font-sans text-[11px] uppercase tracking-[0.45em] text-terracotta">
                        Cronograma
                    </p>

                    <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-coffee md:text-5xl">
                        Cómo transcurrirá el día
                    </h2>

                    <div className="mx-auto mt-8 h-px w-16 bg-sand/60" />

                    <p className="mx-auto mt-8 max-w-xl font-sans text-base leading-relaxed text-ink/80">
                        Estos son los momentos que hemos preparado. Llegar a tiempo nos ayuda a que todo fluya.
                    </p>
                </div>

                {/*Escritorio: la onda*/}
                <div className="relative mt-16 hidden h-96 lg:grid lg:grid-cols-6">
                    {/*Una sola ruta de curvas. Los nodos caen exactamente en el centro
                    de cada columna: 100/1200, 300/1200, ... = 8.33%, 25%, ...
                    El primer y el último nodo van arriba (40%) y el resto alterna*/}
                    <svg 
                        viewBox="0 0 1200 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 h-full w-full text-sand">
                            <path 
                                d="M0,50 C40,50 60,40 100,40 S260,60 300,60 S460,40 500,40 S660,60 700,60 S860,40 900,40 S1060,60 1100,60 S1160,50 1200,50"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.5}
                                vectorEffect="non-scaling-stroke"/>
                    </svg>
                    
                    {schedule.map((item, index) => {
                        //Los índices pares quedan arriba y la onda y los impares abajo
                        const vaArriba = index % 2 === 0;

                        return (
                            <div key={item.time} className="relative">
                                {/*Punto sobre la onda*/}
                                <span
                                    aria-hidden="true"
                                    className={`absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta ring-4 ring-cream
                                    ${ vaArriba ? "top-[40%]" : "top-[60%]" }`}/>
                                
                                {/*Hora, nombre, descripción*/}
                                <div className={`absolute inset-x-0 flex flex-col items-center px-3 text-center
                                    ${ vaArriba ? "bottom-[60%] pb-6" : "top-[60%] pt-6" }`}>
                                        <p className="font-serif text-2xl text-coffee">
                                            {item.time}
                                        </p>

                                        <h3 className="mt-2 font-sans text-[11px] uppercase tracking-[0.15em] text-terracotta">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 font-sans text-xs leading-relaxed text-ink/70">
                                            {item.description}
                                        </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/*Tablet y móvil: línea vertical*/}
                <div className="relative mx-auto mt-14 max-w-md lg:hidden">
                    {/*La línea: va detr´sa de los puntos*/}
                    <span aria-hidden="true" className="absolute inset-y-2 left-[7px] w-px bg-sand/70" />

                    <ol className="space-y-10">
                        {schedule.map((item) => (
                            <li key={item.time} className="relative pl-10">
                                {/*El borde cream "corta" la línea alrededor del punto*/}
                                <span
                                    aria-hidden="true"
                                    className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-cream bg-terracotta" />

                                <p className="font-serif text-2xl text-coffee">
                                    {item.time}
                                </p>

                                <h3 className="mt-1 font-sans text-[11px] uppercase tracking-[0.2em] text-terracotta">
                                    {item.title}
                                </h3>

                                <p className="mt-1 font-sans text-sm leading-relaxed text-ink/70">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}