const dots = document.querySelector('dots');

function tooManyPages(){
    for(let i = 0; i < totalPages.length;i++){
        if(totalPages.length > 3 && targetPage.nextElementSibling.length <= 2 && totalPages[i] !== 1 || totalPages[i] !== totalPages.length){
            totalPages[i].style.display ="none";
            //insert dots
        }if(totalPages.length > 3 && targetPage.previousElementSibling.length <= 2 && totalPages[i] !== 1 || totalPages[i] !== totalPages.length){
            totalPages[i].style.display ="none";
            
        }
    }
}
