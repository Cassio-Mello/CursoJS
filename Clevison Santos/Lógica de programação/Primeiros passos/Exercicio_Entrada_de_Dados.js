const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

  });

    function fazerPergunta(pergunta) {

        return new Promise((resolve) => {

            rl.question(pergunta, (resposta) => {

                resolve(resposta);
                
            });
        });
    }