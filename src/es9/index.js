//operador de reposo opera propiedades de objetos no contruidos

const obj = {
    name: 'claudio',
    age: 28,
    country : 'CL'
}

let { name,  ...all} = obj
console.log(name, all); // claudio { age: 28, country: 'CL' }

let {country, ...all2} = obj
console.log(country, all2); // CL { name: 'claudio', age: 28 }

// propagacion unir objetos

const obj = {
    name: 'claudio',
    age: 28,
}

const obj1 = {
    ...obj,
     country: 'MX'
}

console.log(obj1);


//cuando finaliza una promesa

const helloWorld = () =>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=>{
            resolve('Hello World')
        },3000)
         
        : reject(new  Error('Test Error'))
    })
}

helloWorld()
   .then(response => console.log(response))
   .catch(error=>console.log(error))
   .finally(()=>console.log('finalizo'))


// agrupar bloques widgets
        // ejemplo fecha ([valores permitidos desde - hasta]{cantidad de espacios})
const regexData = /([0-9]{4}-([0-9]{2})-([0-9]{2}))/

const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);
