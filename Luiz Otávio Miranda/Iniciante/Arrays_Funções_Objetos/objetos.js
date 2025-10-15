function criarPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    }
}

const pessoa1 = criarPessoa("Ana", "Silva", 28);
const pessoa2 = criarPessoa("Carlos", "Santos", 35);
const pessoa3 = criarPessoa("Mariana", "Oliveira", 22);

console.log(pessoa1);
console.log(pessoa2.nome, pessoa2.sobrenome);
console.log(pessoa3.nome, pessoa3.idade);