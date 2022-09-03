// event listner

// element.addEventListener("click", function);

const btn = document.querySelector('#btn1');
function alertbtn(){
    alert("I love JavaScript!!!")
}

btn.addEventListener('click', alertbtn);


// mouseover
const newBgColor = document.querySelector('.box-3');
function change(){
    newBgColor.style.backgroundColor = "red";
}

const btn3 = document.querySelector('#btn3');
newBgColor.addEventListener('mouseover', change)

