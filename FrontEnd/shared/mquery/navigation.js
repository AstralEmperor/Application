
function addNav(){
    const navToggle = document.querySelector('.nav__toggleBtn');
    const navUl = document.querySelector('.nav__links');

      navToggle.addEventListener('click', ()=>{
        navUl.classList.toggle('inactive');
    })
    addUserName();
    viewPermission();
    clearLocalData();
}
addNav();

function addUserName(){
  const userDiv = document.querySelector('#nav__user');
  const userNameData = JSON.parse(localStorage.getItem("currentUser")) || 'Gost';

 const firstText = userDiv.childNodes[0];
 firstText.nodeValue = userNameData;
}
function clearLocalData(){
  const logOutBtn = document.getElementById('logout');

  logOutBtn.addEventListener('click', () => {
    window.localStorage.clear();
      window.location = '../../../index.html';
  })
}

function viewPermission(){
  const permission = JSON.parse(localStorage.getItem("currentRole")) || 'GUEST';

 const userLink = document.getElementById('users-link');
 const requestLink = document.getElementById('request-link');

  if(permission === 'ADMIN' || permission === 'EDITOR'){
    userLink.style.display="flex";
    requestLink.style.display="flex";
  }
}