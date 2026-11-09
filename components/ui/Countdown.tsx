"use client";

import { useEffect, useState } from "react";

//Los cuatro valores que mostramos en la pantalla
type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

/**
 * Calcula cuánto falta para una fecha
 * Devuelve null si la fecha ya pasó
 */
function getTimeLeft(targetDate: string): TimeLeft | null {
    //Ambas fechas se convierten en milisegundos y se restan
    const diff = new Date(targetDate).getTime() - Date.now();

    if(diff <= 0) return null;

    const totalSeconds = Math.floor(diff / 1000);

    return {
        days: Math.floor(totalSeconds / 86_400), //60 * 60 *24
        hours: Math.floor((totalSeconds % 86_400) / 3_600),
        minutes: Math.floor((totalSeconds % 3_600) / 60),
        seconds: totalSeconds % 60,
    };
}

type CountdownProps = {
    /** Fecha ISO con zona horaria, por ejemplo "2026-12-28T12:00:00-06:00" */
    targetDate: string;
}

export default function Countdown({targetDate}: CountdownProps){
    //Tres estados posibles:
    //undefined = todavía no lo sabemos (servidor y primer render del cliente)
    //null = la fecha ya pasó
    //TimeLeft = faltan días, horas, minutos y segundos
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null | undefined>(undefined);

    useEffect(() =>{
        const update = () => setTimeLeft(getTimeLeft(targetDate));
        update(); //Calcula el valor real en cuanto el componente se monta
        const interval = window.setInterval(update, 1000);

        //Limpieza: si el componente se desmonta, se detiene el intervalo
        return () => window.clearInterval(interval);
    }, [targetDate]);

    //Si la fecha ya pasó, mostramos un mensaje en lugar de números
    if(timeLeft === null){
        return (
            <p className="mt-14 font-serif text-2xl leading-snug text-cream md:text-3xl">
                ¡Ya nos casamos! Gracias por ser parte de ese día.
            </p>
        );
    }

    const units = [
        {label: "Días", value: timeLeft?.days},
        {label: "Horas", value: timeLeft?.hours},
        {label: "Minutos", value: timeLeft?.minutes},
        {label: "Segundos", value: timeLeft?.seconds}
    ];

    return (
        <div
            role="timer"
            aria-live="off"
            aria-label="Cuenta regresiva para la boda"
            className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-y-12 sm:grid-cols-4">
                {units.map((unit) => (
                    <div
                        key={unit.label}
                        className="flex flex-col items-center border-sand/20 sm:border-l sm:first:border-l-0">
                           <span
                                suppressHydrationWarning
                                className="font-serif text-6xl leading-none text-cream md:text-7xl">
                                    {unit.value === undefined ? "--" : String(unit.value).padStart(2,"0")}
                            </span> 

                            <span className="mt-4 font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta">
                                {unit.label}
                            </span>
                    </div>
                ))}
        </div>
    );
}