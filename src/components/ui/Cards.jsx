import ButtonCard from "./ButtonCard"
import { FaArrowRight } from "react-icons/fa6";

export default function Cards(){
    const words = [
        {
            "name": "House",
            "id": 1,
            "nameTranslate": "casa",
            "definition": "A house is a construction or building intended to be inhabited. It functions as a space of refuge and protection against weather conditions and the environment.",
            "definitionTranslate": "Una casa es una construcción o edificio destinado a ser habitado. Funciona como un espacio de refugio y protección frente a las condiciones climáticas y el entorno.",
            "clue": "Where does Michael Jackson live?",
            "clueTranslate": "Donde vive michael jackson?"
        },
    ]
    return(
        <>
            <section className="flex flex-col items-center px-4">
                {words.map((word) => (
                    <div key={word.id} className="bg-primary-100 p-8 flex flex-col gap-8 justify-between items-center rounded-xl w-full">
                        <h2 className="bg-secondary-500 rounded-xl text-4xl text-neutral-50 font-bold py-2 px-4">{word.name}</h2>
                        <p className="text-base font-semibold">A house is a construction or building intended to be inhabited. It functions as a space of refuge and protection against weather conditions and the environment.</p>
                        <ul className="flex flex-wrap justify-center gap-4">
                            <li className="bg-secondary-500 hover:bg-secondary-300 text-base font-semibold text-neutral-50 py-2 px-2 rounded-xl">
                                <button>Clue...</button>
                            </li>
                            <li className="bg-secondary-500 hover:bg-secondary-300 text-base font-semibold text-neutral-50 py-2 px-2 rounded-xl">
                                <button>Definition...</button>
                            </li>
                            <li className="bg-secondary-500 hover:bg-secondary-300 transition text-base font-semibold text-neutral-50 py-2 px-2 rounded-xl">
                                <button>Translate...</button>
                             </li>
                        </ul>
                    </div>
                ))}

                <button className="bg-secondary-400 flex items-center p-4 rounded-xl
                                     text-neutral-50 text-2xl font-bold min-w-32 mt-16 
                                     hover:bg-secondary-300 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
                    Next word
                    <FaArrowRight />
                </button>
            </section>

        </>
    )
}