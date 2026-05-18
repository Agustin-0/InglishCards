export default function ButtonLevel(){
    const levels = [
        {"option": "Beginer",
            "id": 1
        },
        {"option": "Intermediate",
            "id": 2
        },
        {"option": "Advance",
            "id": 3
        }
    ]
    console.log(levels)
    return(
        <>
            <h1 className="text-4xl text-center font-bold text-neutral-50 mb-8">Choose your level to stars</h1>
            <section className="flex justify-center flex-wrap gap-5 w-full">
                {levels.map((level) => (
                    <div key={level.id} className="py-8 px-4 bg-violet-600 rounded-xl">
                        <h2 className="text-2xl text-neutral-50 font-bold">{level.option}</h2>
                    </div>
                ))}    
            </section> 

        </>
    )
}