const btnCalculate = document.querySelector('#calculate')

btnCalculate.addEventListener('click', function(){
    const name = document.querySelector('#name').value;
    const year = Number(document.querySelector('#age').value);
    const currentYear = new Date().getFullYear();

    if (name === '' || isNaN(year) || year > currentYear){
        alert('Prencha os campo corretamente')
    }

    const age = currentYear - year;
    const result = document.querySelector('#result');

    result.textContent = `Olá ${name}, sua idade é ${age}`
});