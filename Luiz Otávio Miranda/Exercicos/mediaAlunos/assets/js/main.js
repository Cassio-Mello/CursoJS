const inputNome = document.getElementById('nome-aluno');
const inputNota = document.getElementById('nota-aluno');
const btnAdicionar = document.getElementById('adicionar-nota');
const btnCalcular = document.getElementById('calcular-media');
const resultado = document.getElementById('resultado');

const alunos = {}; // { nome: [notas] }

// Adiciona nota para o aluno
btnAdicionar.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    const nota = parseFloat(inputNota.value);

    if (nome === '' || isNaN(nota)) {
        alert('Preencha o nome e uma nota válida!');
        return;
    }

    if (nota < 0 || nota > 10) {
        alert('A nota deve estar entre 0 e 10!');
        return;
    }

    if (!alunos[nome]) {
        alunos[nome] = [];
    }

    alunos[nome].push(nota);

    mostrarListaAlunos();
    inputNota.value = '';
    inputNota.focus();
});

// Calcula a média de todos os alunos
btnCalcular.addEventListener('click', () => {
    if (Object.keys(alunos).length === 0) {
        alert('Nenhum aluno cadastrado!');
        return;
    }

    let html = '<h3>Resultado Final</h3>';

    for (const nome in alunos) {
        const notas = alunos[nome];
        const soma = notas.reduce((acc, nota) => acc + nota, 0);
        const media = soma / notas.length;
        const situacao = media >= 7 ? 
            `<span class="aprovado">Aprovado ✅</span>` : 
            `<span class="reprovado">Reprovado ❌</span>`;


        html += `
            <div class="aluno">
                <p><strong>Aluno:</strong> ${nome}</p>
                <p><strong>Notas:</strong> ${notas.join(', ')}</p>
                <p><strong>Média:</strong> ${media.toFixed(2)}</p>
                <p><strong>Situação:</strong> ${situacao}</p>
                <hr>
            </div>
        `;
    }

    resultado.innerHTML = html;
});

// Atualiza a lista parcial conforme adiciona notas
function mostrarListaAlunos() {
    let html = '<h3>Notas registradas</h3>';
    for (const nome in alunos) {
        html += `
            <p><strong>${nome}</strong>: ${alunos[nome].join(', ')}</p>
        `;
    }
    resultado.innerHTML = html;
}
