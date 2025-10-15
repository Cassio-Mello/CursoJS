const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

rl.question('Digite o número do mês (1-12): ', (mes) => {

    const mesInt = parseInt(mes);
    let estacao;

    switch (mesInt) {
        case 12:
        case 1:
        case 2:
            estacao = 'Verão';
            console.log(`A estação do ano é: ${estacao}`);
            break;
        case 3:
        case 4:
        case 5:
            estacao = 'Outono';
            console.log(`A estação do ano é: ${estacao}`);
            break;
        case 6:
        case 7:
        case 8:
            estacao = 'Inverno';
            console.log(`A estação do ano é: ${estacao}`);
            break;
        case 9:
        case 10:
        case 11:
            estacao = 'Primavera';
            console.log(`A estação do ano é: ${estacao}`);
            break;
        default:
            if (isNaN(mesInt) || mesInt < 1 || mesInt > 12) {
                console.log('Mês inválido. Por favor, insira um número entre 1 e 12.');

            }
            rl.close();
        }
    });
