// main function that hides or shows nav on button press, and calls all other nav functions
function addNav(){
    const navToggle = document.querySelector('.nav__toggleBtn');
    const navUl = document.querySelector('.nav__links');

      navToggle.addEventListener('click', ()=>{
        navUl.classList.toggle('inactive');
    })
    addUserName();
    viewPermission();
    clearLocalData();
    numberOfItems();
    secondaryNav();
}
addNav();

// takes UserName from localStorage, and shows on page
function addUserName(){
  const userDiv = document.querySelector('#nav__user');
  const userNameData = JSON.parse(localStorage.getItem("currentUser")) || 'Gost';

 const firstText = userDiv.childNodes[0];
 firstText.nodeValue = userNameData;
}

//clears whole localStorage on logOut
function clearLocalData(){
  const logOutBtn = document.getElementById('logout');

  logOutBtn.addEventListener('click', () => {
    window.localStorage.clear();
      window.location = '../../../index.html';
  })
}

// reveals nav links based on permission
function viewPermission(){
  const permission = JSON.parse(localStorage.getItem("currentRole")) || 'GUEST';

 const userLink = document.getElementById('users-link');
 const requestLink = document.getElementById('request-link');

  if(permission === 'ADMIN' || permission === 'EDITOR'){
    userLink.style.display="flex";
    requestLink.style.display="flex";
  }
}

//shows item number next to cart link
function numberOfItems(){
    const cartNumber = document.getElementById('cartNumber');
    const itemNumber =JSON.parse(localStorage.getItem("items")) || [];

      if(itemNumber.length >= 1){
         cartNumber.innerText = itemNumber.length ;
      }
}

// secondary nav, which shows or hides based on current display (in html)
function secondaryNav(){
  var navToggle = document.getElementsByClassName('nav__link-button');

for(let i = 0; i < navToggle.length; i++){
    navToggle[i].addEventListener('click',function(){
       const nav__second = this.parentNode.nextElementSibling;

       if(nav__second.style.display === "none" && nav__second !== 0){
        nav__second.style.display = "flex";
        this.src ="../../assets/arrow-up.png"
        this.setAttribute('aria-expanded','true');
       }else{
        nav__second.style.display = "none";
        this.src ="../../assets/arrow-down.png"
        this.setAttribute('aria-expanded','false');
       }
  });
}
}