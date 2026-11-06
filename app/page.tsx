import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import NuestraHistoria from "@/components/sections/NuestraHistoria";

//Página principal(unión de todas las secciones)
export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero/>
                <NuestraHistoria/>
            </main>
        </>
    );
}
