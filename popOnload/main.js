const alertBox = document.querySelector('#pop-up');
const close = document.querySelector('.close');

close.addEventListener("click", () => {
    alertBox.style.display="none"
})
// setTimeout(() => {
//     alertBox.style.display="block"
// }, 3000);


window.addEventListener("load", () => {
    setTimeout(() => {
        alertBox.style.display = "block"
    }, 3000);
})

