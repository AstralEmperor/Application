const container = document.querySelector('.cart__itemsContainer');

function noItems(){
    const noItem = document.querySelector('.cart__noItem-container');
    const items = JSON.parse(localStorage.getItem("items"));

    container.innerHTML = items;
    
    if(items == undefined){
        noItem.style.display = "block";
    }else{
        noItem.style.display = "none";
    }
}
noItems();