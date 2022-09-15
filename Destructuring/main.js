// JavaScript Destructuring
// before ES6

// Object
// const person = {
//     name: "Dileep",
//     age: 23,
//     eyeColor: "Black",
//     education: "B.Tech"
// }
// console.log(person.name)
// console.log(person.age)
// console.log(person.eyeColor)
// console.log(person.education)


// ---------------------------------------------------
// after ES6

// const person = {
//     name: "Dileep",
//     age: 23,
//     eyeColor: "Black",
//     education: "B.Tech"
// }
// // destructuring
// let {name, age, eyeColor, education} = person;
// console.log(name)
// console.log(age)
// console.log(eyeColor)
// console.log(education)

// ---------------------------------------------------
// Array Destructuring

// const arrValue = ['one','two','three'];
// const [x,y,z] = arrValue;
// console.log(x)
// console.log(y)
// console.log(z)


// ---------------------------------------------
// const student = {
//     name: "Jack",
// }

// const {name, age=24} = student;
// console.log(name)
// console.log(age)

// Swapping Variables
// let x = 4;
// let y= 7;
// [x,y] = [y,x];
// console.log(x)
// console.log(y)


// skip

const value = ['one','two','three'];
const [x, , z] = value;
console.log(x)
console.log(z)