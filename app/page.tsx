//Página principal(unión de todas las secciones)
export default function Home() {
    return (
        <main className="min-h-screen p-8 md:p-16">
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-cinnamon">
                Bienvenido a nuestra boda
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-none text-coffee md:text-7xl">
                Pablo <span className="italic text-terracotta">&</span> Marisol
            </h1>

            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-ink/80">
                Acompáñanos a celebrar nuestro amor en nuestra boda. Descubre todos los detalles del evento, confirma tu asistencia y comparte este momento especial con nosotros.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
                <div className="h-16 w-16 rounded-full bg-cream ring-1 ring-sand" />
                <div className="h-16 w-16 rounded-full bg-sand" />
                <div className="h-16 w-16 rounded-full bg-terracotta" />
                <div className="h-16 w-16 rounded-full bg-cinnamon" />
                <div className="h-16 w-16 rounded-full bg-coffee" />
                <div className="h-16 w-16 rounded-full bg-ink" />
            </div>

            <button className="mt-10 rounded-full bg-terracotta px-7 py-3 font-sans text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-cinnamon">
                Confirmar asistencia
            </button>
        </main>
    );
}
