import Container from "../components/layout/Container";
import Header from "../components/layout/Header";
import Section from "../components/layout/Section";
import Cards from "../components/ui/Cards";
import { useLocation } from "react-router-dom"

export default function WordsPage(){
    /*
    PROPOSITO:Este componente tiene la tarea de recibir el state "Level" para poner pasarselo al componente
    <Cards />.
    se debe extraer el dato asi const level = location.state?.level
    si se quisiera acceder solo con const level = location.state.level
    de esta forma se pasa com prop  level ={level} pudiendose usar luego.
    nota: Creo que serai mejor usar este componente para llamar a el algoritmo,
    pasando como data  Mezcalda a cards, de esta forma, cards manejaria renderizacion, traduccion, etc
    y seria mas simple. solo es idea. Ademas el h1 me hace ruido ya que esta aca...
    */
    const location = useLocation()
    const level = location.state?.level
    return(
        <>
        <div className="flex flex-col h-screen bg-primary-200">
            <Header />
            <main className="flex-1">
                <h1 className="text-center text-4xl font-semibold text-neutral-50">The first word is...</h1>
                <Section>
                    <Container>
                        <Cards level={level} />
                    </Container>
                </Section>
            </main>
        </div>
        </>
    )
}