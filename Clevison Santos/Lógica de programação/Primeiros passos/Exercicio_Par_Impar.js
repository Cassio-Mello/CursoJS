const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

})

rl.question('Informe um numero inteiro:', (numero) => {

    const numeroInt = parseInt(numero)

    if (numeroInt % 2 == 0){

        console.log(`o numero ${numero} é par`)

    }else{

        console.log(`O numero ${numero} é impar`)

    }

    rl.question('Informe outro numero inteiro:', (numero2) => {

        const numeroInt2 = parseInt(numero2)

        if (numeroInt2 > 5){
            console.log(`O numero ${numero2} é maior que 5`)
        }else{
            console.log(`O numero ${numero2} é menor que 5`)
        }  
        rl.close() 
    })

})