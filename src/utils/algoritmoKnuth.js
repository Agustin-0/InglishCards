
export default function mezclar(array){
    //Recorre el array de atras hacia adelante
    for (let i = array.length -1; i>0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
    console.log("se mezclaron")
} 



/*
En JavaScript, Math es un objeto global incorporado que proporciona constantes y métodos estáticos para realizar operaciones matemáticas. No se necesita instanciar; se llama directamente escribiendo Math.método(). 

Math.floor()	Redondea el número hacia abajo, al entero más cercano. Ej:
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(-4.9)); // -5

Math.random()	Devuelve un número pseudoaleatorio

*/ 