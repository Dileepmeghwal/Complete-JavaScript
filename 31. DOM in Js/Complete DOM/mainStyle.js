
// DOM Manipulation

// const title = document.querySelector('#main-heading');
    
// title.style.color = 'red';
// console.log(title)


// const listItem = document.querySelectorAll('.list-items');
// // for(i=0; i<listItem.length; i++){
// //     listItem[i].style.fontSize = '4rem';
// // }

// for(i=0; i<listItem.length; i++){
//     listItem[i].style.fontSize = '35px';

// }
// console.log(listItem)



// create Element

const ul = document.querySelector('ul');
const li = document.createElement('li');
const spn = document.createElement('span');
const p = document.createElement('p');
const btn = document.createElement('button');


ul.append(p);

p.innerHTML="hhhhhhhhhhhhh"
p.style.border="1px solid #000"
p.style.background="grey"
p.style.width="100px"
p.style.display="none";
console.log(ul)
ul.style.border="1px solid #ddd";
ul.style.padding="30px";

// adding element
ul.append(li)

// create span
ul.append(spn);
// console.log(ul)
// console.log(ul)

// modifying the 

li.innerText = "X-man";
li.innerText = "Dom"
// console.log(li)
// const firstListItems = document.querySelector('.list-items');

// console.log(firstListItems.innerText);
// console.log(firstListItems.textContent);
// console.log(firstListItems.innerHTML);


// modifying Attribute & classes
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));
li.classList.add('list-items')

// li.classList.remove('list-items')
console.log(li.classList.contains('list-items'));


// remove element
li.remove();
console.log(li)



