const formRegister = document.querySelector('.register');


formRegister.addEventListener('submit', e =>{
    e.preventDefault();

const regName = document.querySelector('.register__name').value;
const regEmail = document.querySelector('.register__email').value;
const regPw = document.querySelector('.register__password').value;

let data = {
    name: regName,
    email: regEmail,
    password: regPw,
    roles: GUEST
}

fetch('../JS/data.json',{
    method:'POST',
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify(data)
})
.then((response) => response.text())
.then((text) => console.log(text))
.catch(error => console.log(error))

        formRegister.reset();
        // window.location = '../HTML/login.html'
});