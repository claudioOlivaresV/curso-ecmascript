//2017

// Object.entries clave y valores de una matriz

const data  = {
    front: 'claudio',
    back :'Kevin',
    desing: 'otro'
}
const entries = Object.entries(data) // [ [ 'front', 'claudio' ], [ 'back', 'Kevin' ], [ 'desing', 'otro' ] ]
console.log(entries);
console.log(entries.length);


// objectvalues devuelve los valores de un objeto a un arreglo

const data  = {
    front: 'claudio',
    back :'Kevin',
    desing: 'otro'
}

const values = Object.values(data)

console.log(values); // [ 'claudio', 'Kevin', 'otro' ]

//padding asignacion de elementos

const string = 'hello'

//anteponer o agregar elementos
// padStart(cantidad finally, string)
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12,' ----------'));






