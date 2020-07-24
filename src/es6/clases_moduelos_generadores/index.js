class Calculator{
    constructor(){
        this.valueA = 0
        this.valueB = 0
    }
    sum(valueA, valueB){
        //seteo las propiedades
        this.valueA = valueA
        this.valueB = valueB

        return this.valueA + this.valueB
    }
    
}

const calc = new Calculator();
console.log(calc.sum(2,2));


//import export

import { hello } from './module'
hello();

//generators 

function* helloWorld(){
    if(true){
        yield 'hello, ';
    }
    if(true){
        yield 'World'
    }
}

const generatorsHello = helloWorld();

console.log(generatorsHello.next().value)
console.log(generatorsHello.next().value)
console.log(generatorsHello.next().value)


