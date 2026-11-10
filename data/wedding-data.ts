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
    groom: "David",
    bride: "Sonia",
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

//Lugares para quedarse
export type Hotel = {
    name: string;
    note: string;
    url: string | null;
}

export const hotels: Hotel[] = [
    //Agregar los hoteles recomendados
    //{ name: "Hotel ejemplo", note: "A 10 minutos del evento", url: "https://..." }
];

//Galería
export type GalleryPhoto = {
    src: string;
    alt: string;
};

export const galleryPhotos: GalleryPhoto[] = [
    //Las fotos se guardan en public/images/ y se agrega así:
    //{ src: "/images/galeria-01.jpg", alt: "Pablo y Marisol en la playa"}
    {src: "/imagesPrueba/gale1.jpg", alt: "Sonia y David"},
    {src: "/imagesPrueba/gale2.jpg", alt: "Sonia y David"},
    {src: "/imagesPrueba/gale3.jpg", alt: "Sonia y David"},
    {src: "/imagesPrueba/gale4.jpg", alt: "Sonia y David"},
    {src: "/imagesPrueba/gale5.jpg", alt: "Sonia y David"},
    {src: "/imagesPrueba/gale6.jpg", alt: "Sonia y David"},
];

//Rutas para las fotos destacadas (Hero e Historia)
//Al pasar a las fotos definitivas: cambiar imagesPrueba -> images, solo aquí
export const featuredPhotos = {
    hero: "/imagesPrueba/hero.jpg",
    history: "/imagesPrueba/historias.jpg",
}

//Preguntas frecuentes
export type FaqItem = {
    question: string;
    answer: string;
};

export const faqItems: FaqItem[] = [
    {
        question: "¿A qué hora debo llegar?",
        answer: "La ceremonía comienza a las 5:00 PM. Te recomendamos llegas entre 4:30 y 4:45 PM para acomodarte sin prisa y no perderte el inicio.",
    },
    {
        question: "¿Qué pasa si tengo alguna restricción alimenticia?",
        answer: "Cuéntanoslo al confirmar tu asistencia. Avisaremos a quien prepara el banquete para que tengas una opción que puedas disfrutar.",
    },
    {
        question: "¿Hasta cuándo puedo confirmar mi asistencia?",
        //Ajustar esta fecha cuando definan el límite real del RSVP
        answer: "Hasta el 1 de diciembre de 2026. Después de esa fecha ya no podremos asegurar tu lugar, así que te pedimos no dejarlo para el final.",
    },
    {
        question: "¿Cómo llego al lugar?",
        answer: "En la sección \"El gran día\" está el botón \"Cómo llegar\", que abre la ubicación exacta en Google Maps. La ceremonia y la recepción son en el mismo lugar.",
    },
];
