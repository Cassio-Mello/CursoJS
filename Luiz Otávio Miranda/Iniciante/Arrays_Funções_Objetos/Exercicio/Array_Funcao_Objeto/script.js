// Transforme o array de pessoas em um array de objetos, 
// onde cada objeto terá as propriedades nome, sobrenome, peso e altura.
//  Mostre no console o nome completo, peso e altura de cada pessoa.
function meuEscopo() {// Função para encapsular o escopo

    const form = document.querySelector('.form');// Seleciona o formulário
    const resultado = document.querySelector('.resultado');// Seleciona a área de resultado

    const pessoas = [];// Array para armazenar os objetos de pessoas

    // Função para receber o evento de submissão do formulário
    function recebeEventoForm(evento) {
        evento.preventDefault();// Previne o comportamento padrão do formulário

        // Seleciona os campos do formulário
        const nome = form.querySelector('.nome');// Seleciona o campo nome
        const sobrenome = form.querySelector('.sobrenome');// Seleciona o campo sobrenome
        const peso = form.querySelector('.peso');// Seleciona o campo peso
        const altura = form.querySelector('.altura');// Seleciona o campo altura

        // Adiciona um novo objeto ao array pessoas
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });


        console.log(pessoas);// Exibe o array de pessoas no console

        // Mostra o nome completo, peso e altura de cada pessoa na área de resultado
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

    };
    // Adiciona o evento de submissão ao formulário
    form.addEventListener('submit', recebeEventoForm);
};
meuEscopo();// Chama a função para iniciar o escopo