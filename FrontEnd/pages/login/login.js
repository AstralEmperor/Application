import { getData } from "../../../BackEnd/api-folder/api.js";

// checks if user is logged in, if that is True, proceeds to next page
function ifLoggedIn(){
  window.addEventListener('load', () => {
    const loggedIn = localStorage.getItem('currentUser');
      if(loggedIn != undefined){ 
        window.location = './FrontEnd/pages/home-page/pocetna.html';
      }
      else return;
  });
}
ifLoggedIn();

// takes data from 'user.json' and compares it to values inputed
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
        // toastr.success("Login Succesful!")
        const role = loginInfo[i].roles;

        let money = moneyGenerator();
        const currentUser = {
            name:loginName,
            permission:role,
            email:loginEmail,
            location:loginInfo[i].location,
            job:loginInfo[i].job,
            money:money
        }

        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        window.location = './FrontEnd/pages/home-page/pocetna.html';
        return true;
        
      }else if(i === loginInfo.length - 1){
          document.querySelector('.login__wrong').style.display ="flex";
          // toastr.error("Account not found!")
          return false;
      }
  }
  loginForm.reset();
 })
})
//randomly gives user moneyAmount, from 1-100
function moneyGenerator(){
    let min = Math.ceil(1);
    let max = Math.floor(100);
    let random = Math.floor(Math.random() * (max - min) + min);
    return random;
}

