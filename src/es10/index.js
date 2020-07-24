let array = [1,2,3, [1,2,3, [1,2,3]]]
//niveles
console.log(array.flat(2));

//mapear cada elemento

let array = [1,2,3, [1,2,3, [1,2,3]]]

console.log(array.flatMap(value => [value, value *2]));

//eliminar espacios en blancos string

let hello = "            Hello World"

console.log(hello);
//espacios al inicio
console.log(hello.trimStart())

let hello2 = "Hello World         "

console.log(hello2);
//espacios al final
console.log(hello2.trimEnd())


//pasar de forma opcional el valor de erro al catch

try{

}catch(error){

}
//ES10
try{

}catch{
    error

}

//trandormar clave valor en objetos

let entries = [
    ["name", "oscar"],
    ["age",32]
]

console.log(Object.fromEntries(entries)); // { name: 'oscar', age: 32 }


//nos permite entrar a la descripcion

let mySimbol = 'My simbol'
let symbol = Symbol(mySimbol)
console.log(symbol.description); // My simbol





