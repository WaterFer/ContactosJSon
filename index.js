const form = document.querySelector('#form');
const inputname = document.querySelector('#input-name');
const inputnum = document.querySelector('#input-num');

const crearBtn = document.querySelector('#crear-btn');
const list = document.querySelector('#list');
const btnDelete = document.querySelectorAll('.btn-delete');
const PHONE_REGEX = /^([0-9]){3}-[0-9]{7}$/
const errorMessage = document.querySelector('.error')



form.addEventListener('submit', async e =>{
    e.preventDefault()
    const listContac = await (await fetch('http://localhost:3000/contacto', {method:'GET'})).json();

    console.log(listContac);
});
form.addEventListener('submit', async e => {


    const response = await fetch('http://localhost:3000/users', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(listItem),
    });


    const name = inputname.value;
    const num = inputnum.value;
    e.preventDefault();
    const listItem = document.createElement('li')
    console.log(listItem);
    listItem.innerHTML =  `
        ${name} ${num} 
            <button class="btn-delete">❌</button>
    `

    const btnDelete = listItem.children[0];
    btnDelete.addEventListener('click', e =>{
    e.target.parentElement.remove();
    e.preventDefault()
    crearBtn.setAttribute('disable', 'true');

    });
    

    console.log(listItem);
    list.append(listItem);
    inputname.value = '';
    inputnum.value = '';
    
    
})

btnDelete.forEach(btnDelete => {
    btnDelete.addEventListener('click', e =>{
        e.target.parentElement.remove();
    })
})

inputnum.addEventListener('input', e => {
    const isValid = PHONE_REGEX.test(e.target.value);
if (isValid) {
    crearBtn.removeAttribute('disabled');
    errorMessage.classList.remove('show');
    inputnum.classList.add('correct');
    inputnum.classList.remove('wrong');

    
} else {    
    crearBtn.getAttribute('disable')
    errorMessage.classList.add('show');
    inputnum.classList.remove('correct');
    inputnum.classList.add('wrong');
    
}
})
console.log(inputnum, inputname, btnDelete, crearBtn);






// list.innerHTML = localStorage.getItem('list')
// localStorage.setItem('list', list.innerHTML); 



