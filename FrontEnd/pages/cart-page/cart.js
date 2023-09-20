const container = document.querySelector('.cart__itemsContainer');

function noItems(){
    const displayContainer = document.querySelector('.cart__buyingContainer');
    const noItem = document.querySelector('.cart__noItem-container');
    const items = JSON.parse(localStorage.getItem("products"));
        if(items == undefined){
            noItem.style.display = "block";
            displayContainer.style.display = "none";
        }else{
            noItem.style.display = "none";
            displayContainer.style.display = "flex";
        }
    }
noItems();

function displayItems(){
    const items = JSON.parse(localStorage.getItem("products"));
    if(items != undefined){
        for(let i = 0; i < items.length; i++){
            container.innerHTML += `
            <div class="cart__singleItem">
                <div class="cart__image">
                <img loading="lazy" src="${items[i].image}" alt="product-name${i + 1}.jpg">
                </div>
                <div class="cart__description">
                    <div class="cart__productName">${items[i].name}</div>
                    <div class="cart__productLocation">${items[i].location}</div>
                    <div class="cart__input">
                        <label for="number${i + 1}" class="cart__amountLabel">kg: </label>
                        <input type="number" id="number${i + 1}" name="number" class="cart__amountInput" min="1" max="${items[i].amount}"  value="1">
                    </div>
                    <div class="cart__productCost"><p>Cena: </p>
                                                  <p><b><em>${items[i].cost}</em></b></p>
                   </div>
                </div>
                <div class="cart__options">
                     <button aria-label="cancel item" class="cart__btnCancel" title="Discard product"><img src="../../assets/close.png" alt="product-cancel${i + 1}.jpg"></button>
                </div>
            </div>`;
        }
    }
}
displayItems();

function cancelItem(){
    const singleItem = document.querySelectorAll('.cart__singleItem');
    for(let i = 0; i < singleItem.length; i++){
        const cancel = singleItem[i].querySelector('.cart__btnCancel');

                cancel.addEventListener('click', () => {
                    const displayContainer = document.querySelector('.cart__buyingContainer');
                    const noItem = document.querySelector('.cart__noItem-container');

                    const items = JSON.parse(localStorage.getItem('products'));
                    singleItem[i].remove();
                    items.splice(i, 1);
                    localStorage.setItem('products', JSON.stringify(items));

                    if(items <= 1){
                        noItem.style.display = "block";
                        displayContainer.style.display = "none";
                        localStorage.removeItem('products');
                        location.reload();
                    }else{
                        noItem.style.display = "none";
                        displayContainer.style.display = "flex";
                    }
                })
      }
}
cancelItem();

function clearItems(){
    const widthraw = document.querySelector('.cart__btnWithraw');
        widthraw.addEventListener('click', () => {
            localStorage.removeItem('products');
            location.reload();
        })
}
clearItems();