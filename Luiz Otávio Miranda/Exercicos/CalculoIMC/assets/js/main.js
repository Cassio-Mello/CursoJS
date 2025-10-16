const form = document.querySelector('#form');// seleciona o formulario

// addEventListener escuta o evento de submit
form.addEventListener('submit', function(event) {
    event.preventDefault();// previne o comportamento padrão do submit que é atualizar a página
    
    // seleciona os inputs de peso e altura
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    // converte os valores dos inputs para número
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // validação dos dados
    if (!peso) {// se peso for inválido
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {// se altura for inválido
        setResultado('Altura inválida', false);
        return;
    }

    // cálculo do IMC
    const imc = getImc(peso, altura);

    // nível do IMC
    const nivelImc = getNivelImc(imc);

    // mensagem de resultado
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);//

});

// função que cria um parágrafo
function criaP() {
    const p = document.createElement('p');// cria o elemento p
    return p;
}

// função que exibe o resultado
function setResultado(msg, isValid) {
    
    const resultado = document.querySelector('#resultado');// seleciona a div de resultado
    resultado.innerHTML = '';// limpa o conteúdo da div
    
    const p = criaP();// cria um parágrafo

    // adiciona a classe conforme o resultado da validação
    if (isValid) {
        p.classList.add('paragrafo-resultado');// adiciona a classe paragrafo-resultado
    } else {
        p.classList.add('bad');// adiciona a classe bad
    }

    // insere a mensagem no parágrafo
    p.innerHTML = msg;
    resultado.appendChild(p);// adiciona o parágrafo na div de resultado

}

// função que calcula o IMC
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// função que retorna o nível do IMC
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}