
function addNav(){
    const navToggle = document.querySelector('.nav__toggleBtn');
    const navUl = document.querySelector('.nav__links');

      navToggle.addEventListener('click', ()=>{
        navUl.classList.toggle('inactive');
    })
}
addNav();
