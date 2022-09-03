// element selectors:
// 1. Single element selector
// 2. Multi element selector

// 1. Single element selector

let element = document.getElementById('myFirst');
// element = element.className;
// element = element.parentNode;
element.innerText = "Hiiiiiiiiii"
element.innerHTML ="<b>Dileep<b>"
console.log(element)


/*anoter selecor 
===========querySelector==========
*/ 

let menu = document.querySelector('#myFirst');
menu = document.querySelector('.child');
menu = document.querySelector('b');
menu = document.querySelector('h1');
menu = document.querySelector('div');
menu.style.color="red"
// console.log(menu)




/*---------Multi Selector----*/
let e = document.getElementsByClassName('child');
 e = document.getElementsByClassName('container');
 e = document.getElementsByTagName('div');

 console.log(e)
 Array.from(e).forEach(n => {
    console.log(element);
    element.style.color="blue";
 })
// console.log(e[0].getElementsByClassName('child'));


const fruits = ["apple", "orange", "cherry"];

console.log(fruits.forEach(function (fetch){
   console.log(fetch)
}))

function show(fanme, age){
	document.write(fanme + "" + age);
   setTimeout(2000, "Fajeet", 33);
}


