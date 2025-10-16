const data = new Date();// Data atual
console.log(data.toString());// Data atual em formato de string
console.log('Dia', data.getDate());// Dia do mês
console.log('Mês', data.getMonth() + 1);// Mês (0-11)
console.log('Ano', data.getFullYear());// Ano com 4 dígitos

console.log(data.toLocaleDateString('pt-BR', { dateStyle: 'full' }));// Data atual em formato local (Brasil) com estilo completo
console.log(data.toLocaleDateString('pt-BR', { dateStyle: 'short' }));// Data atual em formato local (Brasil) com estilo curto
console.log(data.toLocaleDateString('pt-BR', { dateStyle: 'medium' }));// Data atual em formato local (Brasil) com estilo médio
console.log(data.toLocaleDateString('pt-BR', { dateStyle: 'long' }));// Data atual em formato local (Brasil) com estilo longo
console.log(data.toLocaleDateString('pt-BR', { dateStyle: 'full' }));// Data atual em formato local (Brasil) com estilo completo
console.log(data.toLocaleDateString('pt-BR', { dateStyle: 'full', hour12: false }));// Data atual em formato local (Brasil) com estilo completo sem AM/PM

console.log(data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' }));// Data atual em formato local (Brasil) com estilo completo e hora curta
console.log(data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'medium' }));// Data atual em formato local (Brasil) com estilo completo e hora média
console.log(data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'long' }));// Data atual em formato local (Brasil) com estilo completo e hora longa
console.log(data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'full' }));// Data atual em formato local (Brasil) com estilo completo e hora completa
console.log(data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'full', hour12: false }));// Data atual em formato local (Brasil) com estilo completo e hora completa sem AM/PM

const data2 = new Date('2024-01-01 20:20:59');// Data específica
console.log(data2.toString());  // Data específica em formato de string
console.log(data2.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'full' }));// Data específica em formato local (Brasil) com estilo completo e hora completa

const data3 = new Date(2024, 0, 1, 20, 20, 59);// Data específica (ano, mês (0-11), dia, hora, minuto, segundo)
console.log(data3.toString());  // Data específica em formato de string
console.log(data3.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'full' }));// Data específica em formato local (Brasil) com estilo completo e hora completa   
