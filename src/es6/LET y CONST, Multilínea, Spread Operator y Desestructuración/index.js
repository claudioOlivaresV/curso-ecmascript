//multilieas

let lorem = "inicio frace\n"
+"continuacion"

//ES&

let lorem2 = `otra frase epica
ahora es otra frase epica`

console.log(lorem)
console.log(lorem2);


//DEStructuracion elementos

let person = {
    'name': 'claudio',
    'age': 28,
    'country': 'chile'
}

console.log(person.name, person.age)

//ES6
let { name, age, country} = person

console.log(name, age, country)

//propagacion 

let team1  = ['oscar', 'kevin', 'camilo','claudio', 'luis']
let team2 = ['hernalgas', 'ratas']

let team3 = ['David', ...team1, ...team2]

console.log(team3);

// var  y let const
{
    var globalVar = 'Global var'
}
{
    let globlaLet = 'globlar let'
    console.log(globlaLet);
}

console.log(globalVar);
// console.log(globlaLet);

const a = 'b';
// a = 'a';

console.log(a);
