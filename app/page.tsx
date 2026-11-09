import Header from "@/components/layout/Header";
import CodigoVestimenta from "@/components/sections/CodigoVestimenta";
import CuentaRegresiva from "@/components/sections/CuentaRegresiva";
import ElGranDia from "@/components/sections/ElGranDia";
import Galeria from "@/components/sections/Galeria";
import Hero from "@/components/sections/Hero";
import Hospedaje from "@/components/sections/Hospedaje";
import NuestraHistoria from "@/components/sections/NuestraHistoria";
import PreguntasFrecuentes from "@/components/sections/PreguntasFrecuentes";

//Página principal(unión de todas las secciones)
export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero/>
                <NuestraHistoria/>
                <CuentaRegresiva/>
                <ElGranDia/>
                <CodigoVestimenta/>
                <Hospedaje/>
                <Galeria/>
                <PreguntasFrecuentes/>
            </main>
        </>
    );
}
