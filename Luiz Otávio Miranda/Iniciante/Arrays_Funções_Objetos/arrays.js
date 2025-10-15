const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
console.log(alunos[3]); // Ana

alunos[0] = 'Eduardo';// Substitui o valor do índice 0
alunos[4] = 'Luiza';// Adiciona um novo valor no índice 4
alunos[alunos.length] = 'Fábio';// Adiciona um novo valor no final do array 
console.log(alunos); // [ 'Eduardo', 'Juliana', 'Caio', 'Ana', 'Luiza' ]    
console.log(alunos.length); // 5

alunos.push('Otávio');// Adiciona no final do array
alunos.unshift('Mariana');// Adiciona no início do array

alunos.pop();// Remove o último elemento do array
alunos.shift();// Remove o primeiro elemento do array
alunos.splice(1, 2);// Remove a partir do índice 1, 2 elementos (Juliana e Caio)
alunos.splice(1, 0, 'Bruno', 'Camila');// A partir do índice 1, não remove nenhum elemento, adiciona Bruno e Camila
alunos.splice(3, 1, 'Roberto');// A partir do índice 3, remove 1 elemento e adiciona Roberto

delete alunos[1];// Remove o elemento do índice 1, mas mantém o índice (deixa undefined)
console.log(alunos); // [ 'Mariana', <1 empty item>, 'Ana', 'Roberto', 'Luiza', 'Fábio', 'Otávio' ]

alunos.slice(0, 3);// Cria um novo array do índice 0 ao 2 (3 não incluso)
const novosAlunos = alunos.slice(0, 3);
console.log(novosAlunos); // [ 'Mariana', <1 empty item>, 'Ana' ]

const alunos2 = ['Isabela', 'Gabriel', 'Lucas'];
const todosAlunos = alunos.concat(alunos2);// Concatena dois arrays
console.log(todosAlunos); // [ 'Mariana', <1 empty item>, 'Ana', 'Roberto', 'Luiza', 'Fábio', 'Otávio', 'Isabela', 'Gabriel', 'Lucas' ]

