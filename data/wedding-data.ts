//Fuente única de verdad de la boda
//Si un dato cambia(fecha, lugar, link) se cambia solo aquí

export type Venue = { 
    name: string;
    address: string;
    time: string;
    //null mientras no tengamos el link de Google Maps
    mapsUrl: string | null;
};

export const couple = {
    groom: "Pablo",
    bride: "Marisol",
} as const;

export const event = {
    /**
     * Fecha y hora del evento en formato ISO 8601 (YYYY-MM-DDTHH:mm:ssZ) con zona horaria
     * Oaxaca usa UTC-6 todo el año (desde 2022 ya no hay horario de verano)
     * Este string es el que alimenta el countdown, así no hay ambigüedad.
     */
    dateIso: "2026-12-28T12:00:00-06:00",
    dateLabel: "28 de diciembre de 2026",
    timeLabel: "12:00 del mediodía",
    city: "Oaxaca, México"
} as const;

export const ceremony: Venue = {
    name: "Iglesia Santo Domingo",
    address: "Oaxaca de Juárez, Oaxaca",
    time: "12:00",
    mapsUrl: null, //Todo: pegar el link de Google Maps
};

export const reception: Venue = { 
    name: "Salón Shalom",
    address: "Calle de la Reforma 123, Oaxaca de Juárez",
    time: "Por confirmar",
    mapsUrl: null, //Todo: pegar el link de Google Maps
};

export const dressCode = {
    title: "Formal",
    description: "Te pedimos venir con vestimenta formal. Evita el blanco: está reservado para la novia. ¡Gracias por tu comprensión!",
} as const;


