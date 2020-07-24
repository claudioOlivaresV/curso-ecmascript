let name = 'claudio';
let age = 28;
//objetos

obj = {
    name: name,
    age : age
}

//ES6

obj2 = {name, age};

console.log(obj);
console.log(obj2);


//arrow functions

const names = [
    {
        name: 'claudio',
        age : 28
    },
    {
        name: 'Nicole',
        age: 28
    }
]


let listOfNames = names.map(function(item) {
    console.log(item.name);
 
})
//ES6
let listOfNames2 = names.map(item => console.log(item.name) )

const listOfName3 = (name, age) => {
    console.log(name, age);
    
}

// const listOfName4 = name =>{
//     ...
// }

const square = num => num * num;

//promises 

const helloPromises = ()=>{
    return new Promise((resolve, reject)=>{
        if(false){
            resolve('hey todo bien')
        }else{
            reject('ups algo salio mal')
        }
    })
}

helloPromises()
             .then(response => console.log(response))
             .then('soy una promesa encadenada')
             .catch(error => console.log(error))
