
const container = document.querySelector('.main__imagesContainer');
const singleContainer = document.getElementsByClassName('main__singleImgContainer')[0];
const specialContainer = document.querySelector('.man__singleImgContainer--special');

const pagePrevBtn = document.querySelectorAll('.main__pageBtnPrev');
const pageNextBtn = document.querySelectorAll('.main__pageBtnNext');

// Function for cloning 'first' original item 
function listTemplate(){
    let copySingleCont = singleContainer.cloneNode(true); 
    container.appendChild(copySingleCont,specialContainer.nextElementSibling);
}
//function that creates a new Element(cloning element with listTemplate function,and adding Delete function to new item)
let number = 22;
function createListItems(){
    for(let i = 0; i < number; i++){
        listTemplate();
        createComment();
        deleteListItem();
    }
}
createListItems();

const applyStyles = (elements, styles) =>{
    for(let i = 0; i < elements.length; i++){
        elements[i].style.cssText = styles;
    }
};
//3 functions for View changing on button Press. 
function changeImage1() {
    const description = document.querySelectorAll('.main__description');
    const chat = document.querySelectorAll('.main__chatImg');
    const deleteWrap = document.querySelectorAll(".main__delete");
    const del = document.querySelectorAll('.main__deleteImg');
    const cartIcon = document.querySelectorAll('.main__cart');
    const mainText = document.querySelectorAll(".main__text");
    const singleCont = document.querySelectorAll(".main__singleImgContainer");
    const infoCont = document.querySelectorAll(".main__info");
    const buttons = document.querySelectorAll(".main__picBtns");
    const searchDescr = document.querySelectorAll(".man__singleImgContainer--special");
    const searchText = document.querySelectorAll(".main__text--special");
    const mainView1 =document.getElementById("main__View1");
    const activeComment = document.querySelectorAll(".main__comment-box");
    const fruitImg = document.querySelectorAll(".main__fruit");

    if (mainView1.src.endsWith('grid-blue.png')){
        mainView1.src = "../../assets/grid-blue.png";
        
}else{
    mainView1.src = "../../assets/grid-blue.png";
    container.style.cssText="grid-gap:24px;grid-template-columns: repeat(auto-fit, minmax(350px, 6fr));";
    document.querySelector(".main__picBtns").style.cssText ="min-width:279px;";

    applyStyles(description, "display: grid");
    applyStyles(mainText, "display: flex");
    applyStyles(chat,"width:20px;height:20px");
    applyStyles(deleteWrap,"margin-right:0.5em;");
    applyStyles(del,"width:18px;height:18px");
    applyStyles(cartIcon,"width:21px;height:21px");
    applyStyles(singleCont,"display:flex;flex-direction:column;margin-top:30px");
    applyStyles(infoCont,"display:flex;flex-direction:column");
    applyStyles(buttons,"height:41px;margin-left:0rem;");
    applyStyles(searchText,"display:none");
    applyStyles(searchDescr,"display:none");
    applyStyles(activeComment,"width:100%;height:100%");
    applyStyles(fruitImg,"max-width:100%;max-height:100%;");

    document.getElementById("main__View2").src="../../assets/menu.png";
    document.getElementById("main__View3").src="../../assets/list.png";
  }
 }
 
 changePageNum();

function changeImage2() {
    const description = document.querySelectorAll('.main__description');
    const chat = document.querySelectorAll('.main__chatImg');
    const deleteWrap = document.querySelectorAll(".main__delete");
    const del = document.querySelectorAll('.main__deleteImg');
    const cartIcon = document.querySelectorAll('.main__cart');
    const mainText = document.querySelectorAll(".main__text");
    const singleCont = document.querySelectorAll(".main__singleImgContainer");
    const infoCont = document.querySelectorAll(".main__info");
    const buttons = document.querySelectorAll(".main__picBtns");
    const searchDescr = document.querySelectorAll(".man__singleImgContainer--special");
    const searchText = document.querySelectorAll(".main__text--special");
    const activeComment = document.querySelectorAll(".main__comment-box");
    const fruitImg = document.querySelectorAll(".main__fruit");


    const mainView2 =document.getElementById("main__View2");

    if (mainView2.src.endsWith('menu-blue.png')){
        mainView2.src = "../../assets/menu-blue.png";
          
    } else {
        mainView2.src = "../../assets/menu-blue.png";
        document.getElementsByClassName("main__imagesContainer")[0].style.cssText ="grid-template-columns: repeat(auto-fit, minmax(279,3fr));grid-gap:29px;";
        document.getElementsByClassName("main__picBtns")[0].style.cssText ="min-width:429px;";

        applyStyles(description,"display:none");
        applyStyles(mainText,"display:none");
        applyStyles(chat,"width:26px;height:26px;");
        applyStyles(deleteWrap, "margin-right:0.5em;");
        applyStyles(del,"width:24px;height:24px;");
        applyStyles(cartIcon,"width:27px;height:27px");
        applyStyles(singleCont,"display:flex;flex-direction:column;padding-top:0px;max-width:100%;margin-top:30px;");
        applyStyles(infoCont,"display:flex;flex-direction:column");
        applyStyles(buttons,"height:63px;margin-left:0rem;");
        applyStyles(searchText,"display:none");
        applyStyles(searchDescr,"display:none");
        applyStyles(activeComment,"width:100%;height:100%");
        applyStyles(fruitImg,"max-width:100%;max-height:100%;");
  
        document.getElementById("main__View1").src="../../assets/grid.png";
        document.getElementById("main__View3").src="../../assets/list.png";
    }
    
    changePageNum();
}
function changeImage3(){
    const description = document.querySelectorAll('.main__description');
    const chat = document.querySelectorAll('.main__chatImg');
    const deleteWrap = document.querySelectorAll(".main__delete");
    const del = document.querySelectorAll('.main__deleteImg');
    const cartIcon = document.querySelectorAll('.main__cart');
    const mainText = document.querySelectorAll(".main__text");
    const singleCont = document.querySelectorAll(".main__singleImgContainer");
    const infoCont = document.querySelectorAll(".main__info");
    const buttons = document.querySelectorAll(".main__picBtns");
    const searchDescr = document.querySelectorAll(".man__singleImgContainer--special");
    const searchText = document.querySelectorAll(".main__text--special");
    const activeComment = document.querySelectorAll(".main__comment-box");
    const fruitImg = document.querySelectorAll(".main__fruit");

    const mainView3 = document.getElementById("main__View3");

    if (mainView3.src.endsWith('list-blue.png')){
        mainView3.src = "../../assets/list-blue.png";

} else {
        mainView3.src = "../../assets/list-blue.png";
        document.getElementsByClassName("main__imagesContainer")[0].style.cssText ="grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));grid-gap:29px;";
        document.getElementsByClassName("main__picBtns")[0].style.cssText ="min-width:93px;max-height:70px";

        applyStyles(description,"display:flex;justify-content:space-between;flex-basis:100%;gap:0.75rem;text-align:center");
        applyStyles(mainText,"display:none");
        applyStyles(chat,"width:20px;height:20px;margin-left:15%");
        applyStyles(deleteWrap,"margin-right:15%");
        applyStyles(del,"width:18px;height:18px;margin");
        applyStyles(cartIcon,"width:22px;height:22px");
        applyStyles(singleCont,"display:flex;flex-direction:row;border-top:1px solid gray;max-height:100px;justify-content:space-between;padding:12px 0 12px 0;margin-top:0px;padding-left:0.5rem;align-items:center;");
        applyStyles(infoCont,"display:flex;flex-direction:row-reverse;flex-basis:80%;align-items:center;");
        applyStyles(buttons,"height:41px;justify-content:right;border:none;width:fit-content;top:0;gap:1rem;margin-left:0.75rem;");
        applyStyles(searchText,"display:flex;justify-content:flex-start;border:none");
        applyStyles(searchDescr,"display:flex;justify-content:space-between;");
        applyStyles(activeComment,"width:auto;height:auto;");
        applyStyles(fruitImg,"max-width:4rem;max-height:100%;");

        document.getElementById("main__View1").src="../../assets/grid.png";
        document.getElementById("main__View2").src="../../assets/menu.png";

}

changePageNum();
}

    //CHANGING PAGE WITH BUTTONS
    var currentPageNum = 1;
// function that checks the number of Elements(posts in this case),and if theres more then 'numPerPage',adds new Pagination Number that is cloned from previously added one in HTML. Or removes if theres less elements.
//Also changes the current and total number of elements
function displayText(pageElements,arrayOfPosts,start,end,numPerPage){
    const totalElementsNum = document.querySelectorAll('.main__pageItemNum');
    for(let element of totalElementsNum){
        if(arrayOfPosts && arrayOfPosts.length - 1 < numPerPage && arrayOfPosts.length - 1 < end){
            element.textContent = "Prikaz " + start + "-" + pageElements.length + " od " + arrayOfPosts.length + " proizvoda";
        }
        else if(arrayOfPosts && arrayOfPosts.length - 1 >= numPerPage && arrayOfPosts.length - 1 >= end){
            element.textContent = "Prikaz " + start + "-" + end + " od " + arrayOfPosts.length + " proizvoda";
        }
        else if(pageElements){
            element.textContent = "Prikaz " + start + "-" + (start + pageElements.length) + " od " + arrayOfPosts.length + " proizvoda";
        }
    }
}

function changePageNum(){
    const numPerPage = 30;
    let arrayOfitems = Array.from(container.children);
    let arrayOfPosts = [...arrayOfitems].filter(item => item.classList.contains('main__singleImgContainer'));
    let numCont = document.querySelectorAll('.main__pagesNumCont');

    const pageNum = document.querySelector('.main__viewPageNum');
    const totalPages = Math.ceil(arrayOfPosts.length/numPerPage);
    const start = (currentPageNum - 1) * numPerPage;
    const end = start + numPerPage;
    const pageElements = arrayOfPosts.slice(start,end);
    displayText(pageElements,arrayOfPosts,start,end,numPerPage);
    // writes current page element numbers and total number of elements
    //check the length of the array of elements called with SelectorAll(2 containers have page numbers) and then check their children length.
    for(let i = 0; i < numCont.length; i++){
        const currentNumPages = numCont[i].children.length;

        btnSupport(totalPages,currentNumPages)

        //if there is more elements then current pages can fit, clone the last number and add + 1 to its textContent value
        if(currentNumPages < totalPages){
            for(let j = currentNumPages + 1; j <= totalPages; j++){
                let clonePageNum = pageNum.cloneNode(true);
                clonePageNum.textContent = j;
                clonePageNum.classList.remove('current-slideNumber');
                numCont[i].appendChild(clonePageNum);
                if(totalPages > 3){
                    console.log(currentNumPages[j])
                }
            }
            // if theres more pages then number of elements need, removes last one = [1,2,3,4]
        }else if (currentNumPages > totalPages && totalPages >= 1){
            while(numCont[i].children.length > totalPages){
                numCont[i].removeChild(numCont[i].lastChild);
            }
        }
    }

      //Changing visibility of items based on page number
      for(let i = 0; i < arrayOfPosts.length; i++){
        arrayOfPosts[i].style.display = "none";
        if(start <= i && end > i){
            pageElements[i - start].style.display = "flex";
        }
   }
   
   return totalPages;
 }
changePageNum();

//If there is only 1 page, disables button next & enables it if there is more elements then current page can fit (check changePageNum() function)
function btnSupport(totalPages,currentNumPages){
    pageNextBtn.forEach((pageNextButton) =>{
        if(totalPages <= 1){
            pageNextButton.classList.add('disabled');
        }
    else if(totalPages > 1 && currentNumPages < totalPages){
            pageNextButton.classList.remove('disabled');        
        }
    })
}

// On click of button " + " add new Element calling createListItem(), and check if pagination is neccesery with changePageNum();
const addItemBtn = document.querySelector('.add-item');
//adding new Item 
function addingNewItem(){
    addItemBtn.addEventListener('click', ()=>{
        number = 1;
        createListItems();
        changePageNum();
    })
}
addingNewItem();

// Function that adds event listener on all buttons, and removes that item if ' X ' is pressed
function deleteListItem(){
    const singleCont = document.querySelectorAll(".main__singleImgContainer");
    for(let i = 0; i < singleCont.length; i++){
        const deleteBtn = singleCont[i].querySelector('.main__deleteImg');
            deleteBtn.addEventListener('click', () =>{
                setTimeout(()=>{
                    singleCont[i].remove();
                    changePageNum();
                },100)
            })
    }
}
deleteListItem();

//Creating input comment on button click, for every card //api here is empty for now
function createComment(){
        const container = document.querySelector('.main__imagesContainer');
        let arrayOfitems = Array.from(container.children);
        let arrayOfPosts = [...arrayOfitems].filter(item => item.classList.contains('main__singleImgContainer'));

        for(let i = 0; i < arrayOfPosts.length;i++){
            const messagesBtn = arrayOfPosts[i].querySelector('.main__chatBox');
            const commentCancel = arrayOfPosts[i].querySelector('.main__commentCancel ');
            const commentBox =  arrayOfPosts[i].querySelector('.main__comment-box');
            const commentButton = arrayOfPosts[i].querySelector('.main__commentButton');

            messagesBtn.addEventListener('click', () =>{
              
                commentBox.classList.add('active__comment');
        });
        commentCancel.addEventListener('click', e =>{
            e.preventDefault();
            commentBox.classList.remove('active__comment');
        });
        commentButton .addEventListener('click', e =>{
            e.preventDefault();
            const data = arrayOfPosts[i].querySelector('.main__commentBox').value;
    
            fetch('.json',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
              .then(data => console.log(data))
                .catch(error => console.log(error))
        });
        
    };
}
createComment();
//Current page number
const pageNum = (currentPage,targetPage) =>{

    currentPage.classList.remove('current-slideNumber');
    targetPage.classList.add('current-slideNumber');
}
//DISABLING BTMS


const disabledBtn = (targetIndex, numCount) =>{
    if(targetIndex === 0){
        pagePrevBtn.forEach((pagePreviousButton) =>{
            pagePreviousButton.classList.add('disabled');
        })
        pageNextBtn.forEach((pageNextButton) =>{
            pageNextButton.classList.remove('disabled');
        })
    }else if(targetIndex === numCount.children.length - 1){
        pagePrevBtn.forEach((pagePreviousButton) =>{
            pagePreviousButton.classList.remove('disabled');
        })
        pageNextBtn.forEach((pageNextButton) =>{
            pageNextButton.classList.add('disabled');
        })
    }else{
        pagePrevBtn.forEach((pagePreviousButton) =>{
            pagePreviousButton.classList.remove('disabled');
        })
        pageNextBtn.forEach((pageNextButton) =>{
            pageNextButton.classList.remove('disabled');
        })
    }
}

function goToPreviousPage(){
    const numCount = document.querySelector('.main__pagesNumCont');

    const numbers = Array.from(numCount.children);

    const currentPage = document.querySelector('.current-slideNumber');
    const prevPage = currentPage.previousElementSibling;
    const prevIndex = numbers.findIndex(number => number === prevPage);
    currentPageNum = currentPageNum - 1;

    displayText();
    pageNum(currentPage, prevPage);
    disabledBtn(prevIndex,numCount);
}
function goToNextPage(){
    const numCount = document.querySelector('.main__pagesNumCont');

    const numbers = Array.from(numCount.children);

    const currentPage = document.querySelector('.current-slideNumber');
    const nextPage = currentPage.nextElementSibling;
    const nextIndex = numbers.findIndex(number => number === nextPage);
    currentPageNum = currentPageNum + 1;
    
    displayText();
    pageNum(currentPage, nextPage);
    disabledBtn(nextIndex, numCount);
}


function changingPage(){
 // On each of the Previous buttons clicked, change page;button availability
    pagePrevBtn.forEach(pagePrevBtn => {
      
        pagePrevBtn.addEventListener('click', () =>{
            goToPreviousPage();
            changePageNum();
        });
    })

    // On each of the Next buttons clicked, change page;button availability
    pageNextBtn.forEach(pageNextBtn =>{
        pageNextBtn.addEventListener('click', () =>{
            goToNextPage();
            changePageNum();
        });
    })
 }
changingPage();

function returnPage(){
            const numCount = document.querySelector('.main__pagesNumCont');
            const numbers = Array.from(numCount.children);
            const currentPage = document.querySelector('.current-slideNumber');
            const prevPage = currentPage.previousElementSibling;
            const prevIndex = numbers.findIndex(number => number === prevPage);

            currentPageNum = currentPageNum - 1;

            displayText();
            pageNum(currentPage, prevPage);
            disabledBtn(prevIndex, numCount);
}