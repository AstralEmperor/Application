var navToggle = document.getElementsByClassName('nav__link-button');

for(let i = 0; i < navToggle.length; i++){
    navToggle[i].addEventListener('click',function(){
       const nav__second = this.parentNode.nextElementSibling;

       if(this.innerHTML === 'expand_more' && nav__second !== 0){
        nav__second.style.display = "flex";
        this.innerHTML = 'expand_less';
        this.setAttribute('aria-expanded','true');
       }else{
        nav__second.style.display = "none";
        this.innerHTML = 'expand_more';
        this.setAttribute('aria-expanded','false');
       }
  });
}