import Header from "../layout/Header";
import Section from "../layout/Section"
import Container from "../layout/Container";
import ButtonLevel from "../ui/ButtonLevel";
import { useNavigate } from "react-router-dom";

export default function Level() {
    /*Proposito: este componente debe dar la opcion de elegir entre tres niveles al usuario.
    Al elegirse un nivel se redirige al user al la URL  "/LoginPage/Levels/WordsPage" que es
    el primer paramtro de la funcion navigate. Ademas se guarda un state que puede ser pasado
    al componente al que se redirigio al usaurio <WordPage /> el cual se recibe con useLocation()
    proximamente, hay que simplificar y estialr botones.
    */
    const navigate = useNavigate()

    const levels = [
        {"option": "Beginner",
            "id": 1
        },
        {"option": "Intermediate",
            "id": 2
        },
        {"option": "Advanced",
            "id": 3
        }
    ]
    
    function handleLevel(level) {
        navigate("/LoginPage/Levels/WordsPage", {
            state: {
                level : level
            }
        })
    }
    return(
        <>
            <Header />
            <Section>
                <Container>
                    {/* <ButtonLevel /> */}
                    <h1 className="text-4xl text-center font-bold text-neutral-50 mb-8">Choose your level to stars</h1>
            <section className="flex justify-center flex-wrap gap-5 w-full">
                {levels.map((level) => (
                    <button 
                    key={level.id}
                    onClick={() => handleLevel(level.option)} 
                    className="py-8 px-4 bg-violet-600 rounded-xl text-amber-50 font-medium">
                        {level.option}
                    </button>
                ))}    
            </section> 
                </Container>
            </Section>
        </>
    )
}