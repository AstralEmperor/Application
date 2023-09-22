const container = document.querySelector('.cart__itemsContainer');

function noItems(){
    const displayContainer = document.querySelector('.cart__selectedItemsCont');
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
        let itemsTotal = 0;
        let tax = 0;
        let totalCost = 0;
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
                        <label for="number${i + 1}" class="cart__amountLabel">kg: 
                        <input type="number" id="number${i + 1}" name="number" class="cart__amountInput" min="1" max="${items[i].amount}"  value="1">
                        </label>
                    </div>
                    <div class="cart__productCost"><p>Cena: </p>
                                                  <p><b>${items[i].cost}</b></p>
                   </div>
                </div>
                <div class="cart__options">
                     <button aria-label="cancel item" class="cart__btnCancel" title="Discard product"><img src="../../assets/close.png" alt="product-cancel${i + 1}.jpg"></button>
                </div>
            </div>`;
            itemsTotal += parseFloat(items[i].cost);
        }
        let cost = document.getElementById('cost');
        let value = itemsTotal.toFixed(2);
        cost.textContent =` ${value} $`;

        let taxation = document.getElementById('tax');
        tax = (itemsTotal *(5 / 100)).toFixed(2);
        taxation.textContent = ` ${tax} $`;

        let totalCostDiv = document.getElementById('total');
        totalCost = (parseFloat(itemsTotal) + parseFloat(tax)).toFixed(2);
        totalCostDiv.textContent = `${totalCost} $`;
    }
}
displayItems();

function cancelItem(){
    const singleItem = document.querySelectorAll('.cart__singleItem');
    for(let i = 0; i < singleItem.length; i++){
        const cancel = singleItem[i].querySelector('.cart__btnCancel');

                cancel.addEventListener('click', () => {
                    const displayContainer = document.querySelector('.cart__selectedItemsCont');
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
                        location.reload();
                    }
                })
      }
}
cancelItem();

//buying items on button click, if theres enough money in db, pay the amount and return new current money
function buyItems(){
    const buyBtn = document.querySelector('.cart__btnBuy');
    const amountOfMoney = JSON.parse(localStorage.getItem("currentUser"));
    let currentMoney = amountOfMoney.money;
    let totalCost = parseFloat(document.getElementById('total').textContent);
    buyBtn.addEventListener('click', () => {
        const popupCont = document.querySelector('.cart__popUp-container');
        const popup1 = document.getElementById('popup1');
        const popup2 = document.getElementById('popup2');
        if(currentMoney >= totalCost){
            popupCont.style.display="block";
            popup2.style.display="block";
            let finalAmount = (currentMoney - totalCost).toFixed(2);
            amountOfMoney.money = finalAmount;
            localStorage.setItem("currentUser", JSON.stringify(amountOfMoney));
        }else{
            popupCont.style.display="block";
            popup1.style.display="block";
        }
    })
}
function exitPopUp(){
    const popupCont = document.querySelector('.cart__popUp-container');
    const popups = document.querySelectorAll('.cart__relativeContainer');
    for(let i = 0; i <popups.length; i++){
        const close = popups[i].querySelector('.cart__popupCancel');
            close.addEventListener('click', () => {
                popupCont.style.display = "none";
                popups[i].style.display="none";
                localStorage.removeItem('products');
                location.reload();
            })
    }
}
exitPopUp();

function clearItems(){
    const widthraw = document.querySelector('.cart__btnWithraw');
        widthraw.addEventListener('click', () => {
            localStorage.removeItem('products');
            location.reload();
        })
}
buyItems();
clearItems();