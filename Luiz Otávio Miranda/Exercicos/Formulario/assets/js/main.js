const form = document.querySelector('.form');

const pessoas = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();// previne o comportamento padrão do submit que é atualizar a página 

    const inputName = form.querySelector('#name');
    const inputLastName = form.querySelector('#last-name');
    const inputEmail = form.querySelector('#email');
    const inputPhone = form.querySelector('#phone');

    const name = inputName.value;
    const lastName = inputLastName.value;
    const email = inputEmail.value;
    const phone = inputPhone.value;

    const pessoa = {
        name: name,
        lastName: lastName,
        email: email,
        phone: phone

    }

    pessoas.push(pessoa);

    const p = document.createElement('p');
    p.innerHTML = `Nome: ${name} ${lastName} <br> Email: ${email} <br> Telefone: ${phone}`;

    form.insertAdjacentElement('afterend', p)

    pessoas.forEach(element => {
        console.log(`${element.name} ${element.lastName}`)
        
    });
    
    form.reset();
});

