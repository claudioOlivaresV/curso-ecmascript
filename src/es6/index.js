// parametros por defecto 

function  newFunction(name, age, coounty){
    var name = name || 'claudio';
    var age = age || 32;
    var coounty =  coounty || 'CHI';
    console.log (name, age, coounty)
}


//ES6

function  newFuntion2(name = 'claudio', age = 28, coounty= 'CHI'){

    console.log (name, age, coounty)

}


// llamar funciones

newFuntion2();
newFuntion2('Ricardo', 23, 'COL')

let hello = 'Hello'
let world = 'World'
let epoc = hello+ ' '+ world


let epic2 =  `${hello}${world}`

console.log(epic2)

console.log(epoc)