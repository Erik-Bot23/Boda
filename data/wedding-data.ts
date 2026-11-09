//Fuente única de verdad de la boda
//Si un dato cambia(fecha, lugar, link) se cambia solo aquí

export type Venue = { 
    name: string;
    address: string;
    time: string;
    //null mientras no tengamos el link de Google Maps
    mapsUrl: string | null;
};

export type Hotel = {
    name: string;
    note: string;
    url: string | null;
}

export const couple = {
    groom: "Pablo",
    bride: "Marisol",
} as const;

export const event = {
    /**
     * Fecha y hora del evento en formato ISO 8601 (YYYY-MM-DDTHH:mm:ssZ) con zona horaria
     * Cuautitlán Izcalli usa UTC-6 todo el año (desde 2022 ya no hay horario de verano)
     * Apunta al inicio de la ceremonia (5:00 PM), que es cuando arranca el gran día.
     */
    dateIso: "2026-12-28T17:00:00-06:00",
    dateLabel: "28 de diciembre de 2026",
    timeLabel: "5:00 de la tarde",
    city: "Cuautitlán Izcalli, Estado de México"
} as const;

//Un solo link y una sola dirección para la ceremonia y recepción
const mapsUrl = "https://www.google.com/maps/place/Centro+Cristiano+Izcalli/@19.6608527,-99.216204,17z/data=!3m1!4b1!4m6!3m5!1s0x85d21e4b94ff5c1b:0xa22b683567e9db6!8m2!3d19.6608527!4d-99.216204!16s%2Fg%2F11c32b2fyd?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D";
const address = "Jacarandas 6, Santa Rosa de Lima, 54740 Cuautitlán Izcalli, Méx.";

export const ceremony: Venue = {
    name: "Centro Cristiano Izcalli",
    address,
    time: "5:00 PM",
    mapsUrl,
};

export const reception: Venue = {
    name: "Centro Cristiano Izcalli",
    address,
    time: "8:00 PM",
    mapsUrl,
};

export const dressCode = {
    title: "Formal",
    description: "Te pedimos venir con vestimenta formal. Evita el blanco: está reservado para la novia. ¡Gracias por tu comprensión!",
} as const;

export const hotels: Hotel[] = [
    //Agregar los hoteles recomendados
    //{ name: "Hotel ejemplo", note: "A 10 minutos del evento", urel: "https://..." }
];
