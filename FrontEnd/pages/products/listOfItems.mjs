import { getProducts} from '../../../BackEnd/api-folder/api.js';

const containerWrap = document.querySelector('.main__productsContainer');
const container = document.querySelector('.main__imagesContainer');

const pagePrevBtn = document.querySelectorAll('.main__pageBtnPrev');
const pageNextBtn = document.querySelectorAll('.main__pageBtnNext');

const permission = JSON.parse(localStorage.getItem("currentRole"));
// Function for cloning 'first' original item 

function calculateSale(){
    
}
async function createListItems(products){
    
    const container = document.querySelector('#container');
        let generateItem ='';
        for(let product of products.items){

            // if theres a sale do this
            if(product.popust != undefined){

               const popustDecimal = (product.popust / 100);
               const finalPrice = (product.cena * (1 - popustDecimal)).toFixed(2);

                generateItem += `
                <div class="main__singleImgContainer mainContainer">
                    <div class="main__image">
                    <p class="main__sale">${product.popust} %</p>
                    <img loading="lazy" class="main__fruit" src="${product.slika}" alt="fruit.png">
                    </div>
                    <div class="main__info">
                    <form class ="main__comment-box">
                        <label class="main__commentLabel">Comment:</label>
                        <input class="main__commentBox" name="comment" type="text" placeholder="Ostavi komentar">
                        <div class="main__commentBtnWrap">
                        <button class="primaryBtn main__commentButton" type="submit">Post</button>
                        <button class="quarterBtn main__commentCancel">X</button>
                        </div>
                    </form>
                    <div class="main__picBtns">
                    <div class="actions__group1">
                        <button class="main__chatBox"><img loading="lazy" class="main__chatImg" src="../../assets/chat.png" alt="chat.png"></button>
                        <button class="main__cart"><img loading="lazy" class="main__cartImg" src="../../assets/shopping-cart.png" alt="chat.png"></button>
                    </div>
                    <button class="main__delete"><img loading="lazy" class="main__deleteImg" src="../../assets/close.png" alt="delete.png"></button>
                    </div>
                    <dl class="main__description">
                    <dt class="main__text">Lokacija:</dt>
                        <dd class="main__text--location">${product.lokacija}</dd>
                    <dt class="main__text">Vrsta:</dt>
                        <dd class="main__text--productName">${product.produkt}</dd>
                    <dt class="main__text">Količina:</dt>
                        <dd class="main__text--amount">${product.kolicina}</dd>
                    <dt class="main__text">Cena:</dt>
                        <dd class="main__text--price sale">${finalPrice} $/kg</dd>
                </dl>
                </div>
            </div>`
            }else{
        
            generateItem += `
            <div class="main__singleImgContainer mainContainer">
                <div class="main__image">
                <img loading="lazy" class="main__fruit" src="${product.slika}" alt="fruit.png">
                </div>
                <div class="main__info">
                <form class ="main__comment-box">
                    <label class="main__commentLabel">Comment:</label>
                    <input class="main__commentBox" name="comment" type="text" placeholder="Ostavi komentar">
                    <div class="main__commentBtnWrap">
                    <button class="primaryBtn main__commentButton" type="submit">Post</button>
                    <button class="quarterBtn main__commentCancel">X</button>
                    </div>
                </form>
                <div class="main__picBtns">
                <div class="actions__group1">
                    <button class="main__chatBox"><img loading="lazy" class="main__chatImg" src="../../assets/chat.png" alt="chat.png"></button>
                    <button class="main__cart"><img loading="lazy" class="main__cartImg" src="../../assets/shopping-cart.png" alt="chat.png"></button>
                </div>
                <button class="main__delete"><img loading="lazy" class="main__deleteImg" src="../../assets/close.png" alt="delete.png"></button>
                </div>
                <dl class="main__description">
                <dt class="main__text">Lokacija:</dt>
                     <dd class="main__text--location">${product.lokacija}</dd>
                    <dt class="main__text">Vrsta:</dt>
                        <dd class="main__text--productName">${product.produkt}</dd>
                    <dt class="main__text">Količina:</dt>
                        <dd class="main__text--amount">${product.kolicina}</dd>
                <dt class="main__text">Cena:</dt>
                    <dd class="main__text--price">${product.cena} $/kg</dd>
            </dl>
            </div>
        </div>`
    }}
        container.innerHTML = generateItem;

        createComment();
        addToCart()
        deleteListItem();
        changePageNum();
}

getProducts().then(products => {
    products
    createListItems(products);
});

const applyStyles = (elements, styles) =>{
    for(let i = 0; i < elements.length; i++){
        elements[i].style.cssText = styles;
    }
};

//3 functions for View changing on button Press. 
function changeImage1() {
    const view1 = document.querySelector('#main__View1');

    view1.addEventListener('click', ()=>{
        const image = document.querySelectorAll('.main__image');
        const saleTag = document.querySelectorAll('.main__sale');
        const description = document.querySelectorAll('.main__description');
        const chatWrap = document.querySelectorAll('.main__chatBox');
        const chat = document.querySelectorAll('.main__chatImg');
        const deleteWrap = document.querySelectorAll(".main__delete");
        const del = document.querySelectorAll('.main__deleteImg');
        const cartIcon = document.querySelectorAll('.main__cartImg');
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
        containerWrap.style.cssText="grid-gap:24px;grid-template-columns: repeat(auto-fit, minmax(auto,100%, 4fr))";
        document.querySelector(".main__picBtns").style.cssText ="min-width:279px;";
    
        applyStyles(image,"height:20rem;width:auto");
        applyStyles(saleTag, "font-size:1.25rem;transform-origin:28%;");
        applyStyles(description, "display: grid");
        applyStyles(mainText, "display: flex");
        applyStyles(chatWrap,"display:flex");
        applyStyles(chat,"width:25px;height:25px");
        applyStyles(cartIcon,"width:21px;height:21px");
        applyStyles(singleCont,"display:flex;flex-direction:column;margin-top:30px");
        applyStyles(infoCont,"display:flex;flex-direction:column");
        applyStyles(buttons,"height:41px;margin-left:0rem;");
        applyStyles(searchText,"display:none");
        applyStyles(searchDescr,"display:none");
        applyStyles(activeComment,"width:100%;height:100%");
        applyStyles(fruitImg,"max-width:100%;max-height:100%;");
    
        if(permission === 'ADMIN' || permission === 'EDITOR'){
            applyStyles(deleteWrap,"margin-right:0.5em;");
            applyStyles(del,"width:18px;height:18px");
        }
    
        document.getElementById("main__View2").src="../../assets/menu.png";
        document.getElementById("main__View3").src="../../assets/list.png";
      }
      changePageNum();
    })
 }
 changeImage1();

function changeImage2() {

    const view2 = document.querySelector('#main__View2');
    
        view2.addEventListener('click', ()=>{
            const image = document.querySelectorAll('.main__image');
            const saleTag = document.querySelectorAll('.main__sale');
            const description = document.querySelectorAll('.main__description');
            const chatWrap = document.querySelectorAll('.main__chatBox');
            const chat = document.querySelectorAll('.main__chatImg');
            const deleteWrap = document.querySelectorAll(".main__delete");
            const del = document.querySelectorAll('.main__deleteImg');
            const cartIcon = document.querySelectorAll('.main__cartImg');
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
            document.getElementsByClassName("main__productsContainer")[0].style.cssText ="grid-template-columns: repeat(auto-fit, minmax(auto,100%, 4fr));grid-gap:29px;";
            document.getElementsByClassName("main__picBtns")[0].style.cssText ="min-width:429px;";

            applyStyles(image,"height:20rem;width:auto");
            applyStyles(saleTag, "font-size:1.25rem;transform-origin:28%;");
            applyStyles(description,"display:none");
            applyStyles(mainText,"display:none");
            applyStyles(chatWrap,"display:flex");
            applyStyles(chat,"width:28px;height:28px;");
            applyStyles(cartIcon,"width:26px;height:26px");
            applyStyles(singleCont,"display:flex;flex-direction:column;padding-top:0px;max-width:100%;margin-top:30px;");
            applyStyles(infoCont,"display:flex;flex-direction:column");
            applyStyles(buttons,"height:63px;margin-left:0rem;");
            applyStyles(searchText,"display:none");
            applyStyles(searchDescr,"display:none");
            applyStyles(activeComment,"width:100%;height:100%");
            applyStyles(fruitImg,"max-width:100%;max-height:100%;");

         if(permission === 'ADMIN' || permission === 'EDITOR'){
            applyStyles(deleteWrap, "margin-right:0.5em;");
            applyStyles(del,"width:24px;height:24px;");
         }
  
        document.getElementById("main__View1").src="../../assets/grid.png";
        document.getElementById("main__View3").src="../../assets/list.png";
    }   
     changePageNum();
});
}
changeImage2();

function changeImage3(){
    const view3 = document.querySelector('#main__View3');
    
    view3.addEventListener('click', ()=>{
    const image = document.querySelectorAll('.main__image');
    const saleTag = document.querySelectorAll('.main__sale');
    const description = document.querySelectorAll('.main__description');
    const chatWrap = document.querySelectorAll('.main__chatBox');
    const chat = document.querySelectorAll('.main__chatImg');
    const deleteWrap = document.querySelectorAll(".main__delete");
    const del = document.querySelectorAll('.main__deleteImg');
    const cartIcon = document.querySelectorAll('.main__cartImg');
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
        document.getElementsByClassName("main__productsContainer")[0].style.cssText ="grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));grid-gap:29px;";
        document.getElementsByClassName("main__picBtns")[0].style.cssText ="min-width:93px;max-height:70px";

        applyStyles(image,"height:3rem;width:3rem");
        applyStyles(saleTag, "font-size:0.8rem;transform-origin:center;");
        applyStyles(description,"display:flex;justify-content:space-between;flex-basis:100%;gap:0.75rem;text-align:center");
        applyStyles(mainText,"display:none");
        applyStyles(chatWrap,"display:none");
        applyStyles(chat,"width:20px;height:20px;margin-left:10px");
        applyStyles(cartIcon,"width:22px;height:22px");
        applyStyles(singleCont,"display:flex;flex-direction:row;border-top:1px solid gray;max-height:100px;justify-content:space-between;padding:12px 0 12px 0;margin-top:0px;padding-inline:0.5rem;align-items:center;");
        applyStyles(infoCont,"display:flex;flex-direction:row-reverse;flex-basis:80%;align-items:center;");
        applyStyles(buttons,"justify-content:right;align-items:center;flex-direction:column;border:none;width:fit-content;top:0;gap:1rem;margin-inline:0.5rem;");
        applyStyles(searchText,"display:flex;justify-content:flex-start;border:none");
        applyStyles(searchDescr,"display:flex;justify-content:space-between;");
        applyStyles(activeComment,"width:auto;height:auto;");
        applyStyles(fruitImg,"max-width:4rem;max-height:100%;");

        if(permission === 'ADMIN' || permission === 'EDITOR'){
            applyStyles(deleteWrap,"margin-right:0");
            applyStyles(del,"width:18px;height:18px;margin");
        }

        document.getElementById("main__View1").src="../../assets/grid.png";
        document.getElementById("main__View2").src="../../assets/menu.png";

 }
 changePageNum();
    })
}

changeImage3();
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
    const numPerPage = 8;
    let arrayOfitems = Array.from(containerWrap.children);
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

// Function that adds event listener on all buttons, and removes that item if ' X ' is pressed
function deleteListItem(){
    const singleCont = document.querySelectorAll(".main__singleImgContainer");
    for(let i = 0; i < singleCont.length; i++){
        const deleteBtn = singleCont[i].querySelector('.main__deleteImg');
        const deleteBtnWrap = singleCont[i].querySelector(".main__delete");

        if(permission === 'ADMIN' || permission === 'EDITOR'){
            deleteBtn.addEventListener('click', () =>{
                setTimeout(()=>{
                    singleCont[i].remove();
                    changePageNum();
                },100)
            })
        }else{
            deleteBtn.style.display="none";
            deleteBtnWrap.style.display="none";
        }
    }
}
deleteListItem();

// Shopping Cart event listener, which pushes items to localStorage, or splices 1 item if unselected
function addToCart(){
    const cartNumber = document.getElementById('cartNumber');
    const singleCont = document.querySelectorAll(".main__singleImgContainer");

    for(let i = 0; i < singleCont.length; i++){
        let selected = false;
        const cart = singleCont[i].querySelector('.main__cartImg');

        cart.addEventListener('click', () => {
            const fruitImg = singleCont[i].querySelector('.main__fruit').src;
        
            const productName = singleCont[i].querySelector('.main__text--productName').textContent;
            const location = singleCont[i].querySelector('.main__text--location').textContent;
            const amount = singleCont[i].querySelector('.main__text--amount').textContent;
            const cost = singleCont[i].querySelector('.main__text--price').textContent;

            const product = {
                image:fruitImg,
                name:productName,
                location:location,
                amount:amount,
                cost:cost
            }

            if(selected === false){
                cart.src="../../assets/shopping-cart-green.png";
                const storage = JSON.parse(localStorage.getItem("products")) || [];
                storage.push(product);
                localStorage.setItem("products", JSON.stringify(storage))
                cartNumber.style.display = "flex";
                numberOfItems();
               selected = true;
            }else if(selected === true){
                cart.src="../../assets/shopping-cart.png";
                const storage = JSON.parse(localStorage.getItem("products")) || []
                storage.splice(product, 1);
                localStorage.setItem('products', JSON.stringify(storage));
                if(storage.length === 0){
                    cartNumber.style.display = "none";
                    localStorage.removeItem("products");
                 }
                numberOfItems();
                selected = false;
            }
        })
    }
}
addToCart();

//Creating input comment on button click, for every card //api here is empty for now
function createComment(){
        const containerWrap = document.querySelector('.main__productsContainer');
        let arrayOfitems = Array.from(containerWrap.children);
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
            commentBox.reset();
        });
        commentButton .addEventListener('click', e =>{
            e.preventDefault();
                const data = arrayOfPosts[i].querySelector('.main__commentBox').value;
                // postComment(data) 
                commentBox.reset();
                commentBox.classList.remove('active__comment');
        });
        
    };
}
createComment()

// Post comment on json db ( NOT WORKING SINCE NO ACTUAL SERVER)
async function postComment(data) {
    try {
      const res = await fetch("../../../BackEnd/api-folder/data/comments.json", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await res.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
}

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
