
function displayUserData(){
    const name = document.querySelector('.profileInfo__name');
    const email = document.querySelector('.profileInfo__email');
    const wallet = document.querySelector('.profileInfo__wallet--number');
    const userData = JSON.parse(localStorage.getItem("currentUser"));

    name.textContent = userData.name;
    email.textContent = userData.email;
    wallet.textContent =`${userData.money} $`;
}
displayUserData()