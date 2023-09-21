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
    numberOfItems();
}
addNav();

// takes UserName from localStorage, and shows on page and allows view of cart and profile, otherwise shows login button
function addUserName(){
  const userDiv = document.querySelector('#nav__user');
  const userData = JSON.parse(localStorage.getItem("currentUser"));

 const firstText = userDiv.childNodes[0];
 if(userData != undefined){
    firstText.nodeValue = userData.name;

 }else if(userData == undefined){
    const secondNav = userDiv.nextElementSibling;
    userDiv.innerHTML = `<a class="login tertiaryBtn" href="../../../index.html">Uloguj se</a>`
    secondNav.style.display = "none";
 }
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
  const user = JSON.parse(localStorage.getItem("currentUser")) || 'GUEST';

 const userLink = document.getElementById('users-link');
 const requestLink = document.getElementById('request-link');

  if(user.permission === 'ADMIN' || user.permission === 'EDITOR'){
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
// shows number of items selected for purchase
function numberOfItems(){
  const cartNumber = document.getElementById('cartNumber');
  const itemNumber = JSON.parse(localStorage.getItem("products")) || [];

  if(itemNumber.length === 0){
      cartNumber.style.display = "none";
      localStorage.removeItem("products");
   }
  else if(itemNumber.length >= 1){
      cartNumber.style.display = "flex"; 
       cartNumber.innerText = itemNumber.length ;

  }else{
      cartNumber.style.display = "flex"; 
  }
}