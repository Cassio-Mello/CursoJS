const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout
})

rl.question('Qual a sua idade?', (idade) => {

    const indadeNum = parseInt(idade)

    if (idade > 18){

        console.log(`Voce têm ${idade}, você é maior de idade`)

    }else{

        console.log(`Voce têm ${idade}, você é menor de idade`)

    }

    rl.close()

})