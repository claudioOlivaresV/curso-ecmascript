
const helloWorld = () =>{
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(()=>resolve('hello World'),3000)
            : reject(new Error ('Test Error'))

        }

    )
}
//funcion async await
// const HelloAsync = async () =>{
//     const hello = await helloWorld()
//     console.log(hello)

// }

// HelloAsync()

//forma correcta


const formaCorrecta = async () =>{
    try{
        const hello = await helloWorld()
        console.log(hello)

    }catch(error){
        console.log(error);
        


    }
}
formaCorrecta()