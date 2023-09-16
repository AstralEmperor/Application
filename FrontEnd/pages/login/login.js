import { getData } from "../../../BackEnd/api-folder/api.js";

getData().then(loginInfo => {
  loginInfo;
  const loginForm = document.querySelector('.login');
  loginForm.addEventListener('submit', e =>{
    e.preventDefault();
    const loginName = document.querySelector('.login__name').value;
    const loginEmail = document.querySelector('.login__email').value;
    const loginPw = document.querySelector('.login__password').value;
    
  for(let i = 0; i < loginInfo.length; i++){
      if(loginName === loginInfo[i].names && loginEmail === loginInfo[i].email && loginPw === loginInfo[i].password){
        toastr.success("Login Succesful!")
        const role = loginInfo[i].roles;

        const currentUser = localStorage.setItem("currentUser", JSON.stringify(loginName));
        const currentRole = localStorage.setItem("currentRole", JSON.stringify(role));
        window.location = './FrontEnd/pages/home-page/pocetna.html';
        return true;
        
      }else if(i === loginInfo.length - 1){
          document.querySelector('.login__wrong').style.display ="flex";
          toastr.error("Account not found!")
          return false;
      }
  }
  loginForm.reset();
 })
})
