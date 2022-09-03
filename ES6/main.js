// ES6

// Rest  & spread opertaor

function addNumber(a,b,c,...other){
    console.log(other)
    return a+b+c;
}
const result = addNumber(2,3,4,8,9,10,11,12)
console.log(result)

function addition(a,b,...others){
    console.log(others)
    return a *b;

}
console.log(addition(2,5,12,4))

// Spread
var names = ["ajay", "anuj", "vivek", "ram"];
console.log(...names)
function getNames(name1,name2, name3){
    console.log(name1, name2, name3)
}
getNames(names[0], names[1], names[2])
getNames(...names);





const fruits = ['apple','banana','grapes','papita'];
console.log(...fruits)

function getFruit(fruit1, fruit2, fruit3,fruit4){
    console.log(fruit1, fruit2, fruit3,fruit4)
}
getFruit(fruits[0], fruits[1], fruits[2], fruits[3])
getFruit(...fruits)


// Object ke sath => Rest

// Rest
var students ={
    name: "Dileep",
    age: 23,
    hobbies: ["watching Movies", "coding"]
}

const {...rest} = students;
console.log(rest)



// spred
var newStudent = {
    ...students,
    age: "25"
}
console.log(newStudent)





// function Greet(){
//     setTimeout(() => {
//         console.log("Hello")
//     }, 3000);
// }
// Greet()

// function Welco(){
//     setInterval(() => {
//         console.log("Heyy")
//     }, 4000);
// }

// Welco()


// const dost = ['ajay','sumit','vikash', 'ashu'];
// const res = dost.map((val,index,arr)=> {
//     return  arr.includes('sumit');
// })
// console.log(res)

const list = [
    {
        id: 1,
        name: "Dileep",
        age: 23,
        eyeColor: "black",
    },
    {
        id: 2,
        name: "Rajesh",
        age: 25,
        eyeColor: "brown",
    },
    {
        id: 3,
        name: "Amit",
        age: 23,
        eyeColor: "Brown",
    },
    {
        id: 4,
        name: "Ashu",
        age: 23.5,
        eyeColor: "black",
    },
]



const res = list.map((cur,i,arr) => {
    return `${cur.name} ${cur.age} ${cur.eyeColor}`;
})
console.log(res)




// const value = null;
// console.log(value)

// const undi = undefined;
// console.log(undi);


// const e = "";
// console.log(e);



let dom = myFunction(40,4);
// return will end up in dom

function myFunction(a, b){
    return a *b;
}
myFunction()

console.log(dom)



// function add(a,b){
//     return a+b;
// let r = "Dileep";

// }
// console.log(add(1,5))
// console.log(r)


// object


// const personData = {
//     name: "Ram",
//     age: 32,
//     eys: "Black",
//     fullname: function(){
//         return this.name+ " " + this.age+ " " + this.eys ;
//     }

// }

// console.log(personData.fullname())


// String
// let text = 'It\'s alright.';
// let text = "The character \\ is called backslash.";
// console.log(text)

// let x = 'Jhon';
// let y = new String("Jhon");
// let z = new Array('Jhon','bhau')
// let o = new Object(y)
// console.log(x)
// console.log(y)
// console.log(z)
// console.log(o)

// let x = new String("Jhon");
// let y = new String("Jhon");
// console.log(x==y)




const str = 'Apple, banna, kiwi';
console.log(str.slice(7,15))
console.log(str.substring(7,13))
console.log(str.substr(6))
console.log(str.replace("kiwi", "apple"));

const strs = "a1 b2 b3";
const resultNum = strs.replace(/[0-9]/g, '');
console.log(resultNum)

const email = "Dileepmeghwal143@gmail.com";
const invalid = "#@$%^Dileep";

let modify = email.replace(/[@0-9]/gi, '');
 modify = invalid.replace(/[@#$%^]/g, '');
console.log(modify)



carWale=  "volvo";
var carWale;
console.log(carWale)

console.log(Greeting())

function Greeting(){
    return "Hello Js";
}












// ES5
// var z = function(x,y){
//     return x * y;
// }
// console.log(z(2,4))

// // ES6
// const x = (x,y) => x+y;
// console.log(x(12,5))

// const y = (x,y) => {return x * y}
// console.log(y(23,2))




// const apples = {name: 'Apples'};
// const bananas = {name: 'Bananas'};
// const oranges = {name: 'Oranges'};

// const fruits = new Map();
// var res = fruits.set(apples, 500)
// console.log(res)

// const letters = new Set();
// res = letters.add("a")
// letters.add("b")
// letters.add("c")

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// let id = Symbol('id');
// person[id] = 140353;
// // Now person[id] = 140353
// // but person.id is still undefined
// console.log(res)



// using promise

// const mmyPromise = new Promise(function(myResolve, myReject){
//     setTimeout(function(){
//         myResolve("I love you !!");
//     }, 3000);
// });
// mmyPromise.then(function(value){
//     console.log(value)
// })

// const person2 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
  
//   let ids = Symbol('ids');
//   res = person2[ids] = 140353;
//   console.log(res)
//   // Now person[id] = 140353
//   // but person.id is still undefined


//   const fruit = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruit.keys();

// for(val in keys){
//     console.log(keys[val])
// }

