"use client";

import { useEffect, useState } from "react";

const navItems = [
{ label: "Inicio", href: "#inicio"},
{ label: "Historia", href: "#historia"},
{ label: "El gran día", href: "#gran-dia"},
{ label: "Vestimenta", href: "#vestimenta"},
{ label: "Hospedaje", href: "#hospedaje"},
{ label: "Galería", href: "#galeria"},
{ label: "Preguntas", href: "#faq"},
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //El header se vuelve sólido si hay scroll o si el mnenú móvil está abierto
    const isSolid = isScrolled || isMenuOpen;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);

        handleScroll(); //Por si la página ya esta scrolleada al cargar
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsMenuOpen(false);
        };

        //Bloquea el scroll del fondo mientras el menú está abierto
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isMenuOpen]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 
            ${isSolid ? "border-sand/60 bg-cream/95 backdrop-blur-sm" : "border-transparent bg-transparent"}`}>

                <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
                    {/*Monograma */}
                    <a
                        href="#inicio"
                        onClick={() => setIsMenuOpen(false)}
                        className={`font-serif text-2xl tracking-[0.25em] transition-colors duration-300 
                        ${isSolid ? "text-coffee" :  "text-white"}`}>
                            P &amp; M
                    </a>

                    {/*Navegación del escritorio */}
                    <nav
                        aria-label="Navegación principal"
                        className="hidden items-center gap-6 lg:flex xl:gap-8">
                            <ul className="flex items-center gap-5 xl:gap-8">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <a href={item.href} 
                                            className={`font-sans text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 
                                            ${isSolid ? "text-ink/70 hover:text-terracotta" : "text-white/85 hover:text-white"}`}>
                                                {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#rsvp"
                                className="rounded-full bg-terracotta px-5 py-2.5 font-sans text-[11px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-cinnamon">
                                    Confirmar
                            </a>
                    </nav>

                    {/*Botón hamburguesa para móvil */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        aria-expanded={isMenuOpen}
                        aria-controls="menu-movil"
                        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        className={`inline-flex h-10 w-10 items-center justify-center transition-colors duration-300 lg:hidden
                        ${isSolid ? "text-coffee" : "text-white"}`}>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.5}
                                strokeLinecap="round"
                                className="h-6 w-6"
                                aria-hidden="true">
                                    {isMenuOpen ? (
                                        <path d="M6 6l12 12M18 6L6 18" />
                                    ) : (
                                        <path d="M4 7h16M4 12h16M4 17h16" />
                                    )}
                            </svg>
                    </button>
                </div>

                {/*Menú móvil */}
                {isMenuOpen && (
                    <nav
                        id="menu-movil"
                        aria-label="Navegación móvil"
                        className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-sand/60 bg-cream lg:hidden">
                            <ul className="flex flex-col px-6 py-2">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block border-b border-sand/40 py-4 font-sans text-xs uppercase tracking-[0.2em] text-ink/80 transition-colors duration-200 hover:text-terracotta">
                                                {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="px-6 pt-4 pb-6">
                                <a
                                    href="#rsvp"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block rounded-full bg-terracotta px-6 py-3 text-center font-sans text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-cinnamon">
                                        Confirmar asistencia
                                </a>
                            </div>
                    </nav>
                )}
        </header>
    );
}
