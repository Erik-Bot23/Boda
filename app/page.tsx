import Header from "@/components/layout/Header";
import CodigoVestimenta from "@/components/sections/CodigoVestimenta";
import CuentaRegresiva from "@/components/sections/CuentaRegresiva";
import ElGranDia from "@/components/sections/ElGranDia";
import Hero from "@/components/sections/Hero";
import Hospedaje from "@/components/sections/Hospedaje";
import NuestraHistoria from "@/components/sections/NuestraHistoria";

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
            </main>
        </>
    );
}
