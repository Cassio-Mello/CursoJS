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

async function coletarRespostas() {

    const nome = await fazerPergunta('Qual é o seu nome? ');
    const corFavorita = await fazerPergunta('Qual é a sua cor favorita? ');
    const animalFavorito = await fazerPergunta('Qual é o seu animal favorito? ');
    const hobby = await fazerPergunta('Qual é o seu hobby? ');
    const pratoFavorito = await fazerPergunta('Qual é o seu prato favorito? '); 

    console.log(`\nAqui estão as suas respostas:
    Nome: ${nome}
    Cor favorita: ${corFavorita}
    Animal favorito: ${animalFavorito}
    Hobby: ${hobby}
    Prato favorito: ${pratoFavorito}`);

    rl.close();
}

coletarRespostas();
