const preloader = document.querySelector(".preloader");

window.addEventListener("load", () =>{
    setTimeout(() => {
        preloader.style.display = "none";
    }, 3000);
})