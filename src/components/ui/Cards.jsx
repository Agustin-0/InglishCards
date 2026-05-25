import { useEffect, useState } from "react";
import ButtonCard from "./ButtonCard"
import { FaArrowRight } from "react-icons/fa6";
import mezclar from "../../algoritmoKnuth"
import { words } from "../../data"
import NotFoundPage from "../pages/NotFoundPage";

export default function Cards(){
    /*Este componente empieza como un estado inicial "dataMezclada" de [],
    para llenarlo  se llama con un useEffect al algoritmo knuth, la primera vez.
    se setea el resultado en "dataMezclada" y por ultimo se pasa a una card
    y es renderizada */
    const [dataMezclada, setDataMezclada] = useState([])
    const [indice, setIndice] = useState(0)
    const [showInglish, setShowInglish] = useState(true)
    const currentWord = dataMezclada[indice]
    const [clue, setClue] = useState(false)
    const [definition, setDefinition] = useState(false)

    useEffect(() => {
        setDataMezclada(mezclar(words))
    },[]) //probemos

    const handleindice = () => {
        setIndice(indice + 1 )
    }
    /*En el primer render react intenta armar el componente siguiendo lo que 
    pusimos que es "dataMezclada[indice].name" el problema es que "indice"
    es 0 al inicio, por lo para react es undefined y rompe que se debe
    poner una alternativa que es el if en este caso */
    if(dataMezclada.length === 0){
        return <h1>cargando</h1>
    }
    /* Este es el famosisimo caso BORDE, si mi array tiene 5 elementos cuado llegue a 5
    ya va a ser invalido y mostrara esto*/
    if(indice >= dataMezclada.length){
        return <NotFoundPage />
    }
    return(
        <>
            <section className="flex flex-col items-center px-4">
                        <div className="bg-primary-100 p-8 flex flex-col gap-8 justify-between items-center rounded-xl w-full relative">
                            <h2 className="bg-primary-200 rounded-xl text-4xl text-secondary-500 
                            font-bold py-2 px-4 absolute -top-7 border-2 border-primary-100">
                                {showInglish? currentWord.name : currentWord.nameTranslate }
                                </h2>

                                {!definition? "":<p className="text-base font-semibold text-center">{showInglish? currentWord.definition : currentWord.definitionTranslate }</p> }

                                {!clue? "": <p className="text-base font-semibold text-center">{showInglish?currentWord.clue: currentWord.clueTranslate}</p>}

                            <ul className="flex flex-wrap justify-center gap-4 pt-4">
                                <li>
                                    <button 
                                    onClick={() => setClue(prev => !prev)}
                                    className="bg-secondary-500 hover:bg-secondary-300 text-base font-semibold text-neutral-50 py-2 px-2 rounded-xl focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
                                        {showInglish? "Clue" : "Pista"}
                                    </button>
                                </li>
                                <li>
                                    <button
                                    onClick={() => setDefinition(prev => !prev)} 
                                    className="bg-secondary-500 hover:bg-secondary-300 text-base font-semibold text-neutral-50 py-2 px-2 rounded-xl focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
                                        {showInglish? "Definition..." : "Definicion"}
                                    </button>
                                </li>
                                <li>
                                    <button className="bg-secondary-500 hover:bg-secondary-300 text-base font-semibold text-neutral-50 py-2 px-2 rounded-xl focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700" onClick={() => setShowInglish(!showInglish)}>
                                        {showInglish? "Translate..." : "Traduccion"}
                                    </button>
                                </li>
                            </ul>
                        </div>

                    <button onClick={handleindice} className="bg-secondary-400 flex items-center p-4 rounded-xl
                                        text-neutral-50 text-2xl font-bold min-w-32 mt-16 
                                        hover:bg-secondary-300 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
                        {showInglish? "Next word": "siguiente palabra"}
                        <FaArrowRight />
                    </button>
                </section>
        </>
    )
}