const nav = document.querySelector('.navbar');
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('scroll-on');
        console.log("Scroll")
    }else{
        nav.classList.remove('scroll-on');
    }
}