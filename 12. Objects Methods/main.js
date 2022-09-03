// Assign Method

// const object1 = {
//     a: 1,
//     b: 2,
//     c: 3,
// }

// const  object2 = {
//     d: 4,
//     e: 5,
//     f: 6,
// }
// var object3 = Object.assign({c: 5, d: 5}, object1)
// let object4 = Object.assign({g: 100, h: 140}, object2)
// console.log(object1, object3,object4)



// Obbject.Create ()

// function fruit(){
//     this.name = "Grapes";
// }
// function fun(){
//     fruit.call(this)
// }
// fun.prototype =  Object.create(fruit.prototype);
// let app = new fun();
// console.log(app)



// Object.freeze()

// let person = {
//     age: 23,
// }

// let person1 = Object.freeze(person);
// person1.age=32;
// console.log(person.age)
// console.log(Object.isFrozen(person1)) //it defined freez value

// Object.is()

// let fees = {
//     amout: 10000,
// }
// let fees1 = {
//     amout: 10000,
// }
// console.log(Object.is(fees.amout, fees1.amout))



// Object.isExtensible()

// const object1 = {

// }

// console.log(Object.is(object1))
// console.log(Object.isExtensible(object1)) 


// Obbject.isSealed()



// const object1 = {
//     name: "abc",
// }
// const object2 = Object.seal(object1)
// object1.name = "def",
// console.log(object1.name)

// // // // let perform Delete
// delete object1.name;
// console.log(object1.name) //not delete

// console.log(Object.isSealed(object1))
// console.log(Object.isSealed(object2))






// Object.values()

// const user = {
//     id: 1,
//     roll: 10,
//     fname: "Abc",
// }

// console.log(Object.values(user))
// console.log(user)




// Practice Object Methods

// const person1 = {
//     a: 10,
//     b: 20,
//     c:30,
// }
// const person2 = {
//     d: 50,
//     e:60,
//     f:90,
// }
// const change = Object.assign({d:40},{e:20}, person1)
// const view = Object.assign({g:100}, person2);
// console.log(change)
// console.log(view)


// // create()

// function fruit(){
//     this.name = "grapes";
// }
// function fun(){
//     fruit.call;
// }

// fun.prototype = Object.create(fruit.prototype);
// let app = new fruit();

// console.log(app)



// // freezz

// let old ={
//     age: 23,
// } 
// let check = Object.freeze(old);
// old.age=32;
// console.log(check)
// console.log(Object.isFrozen(old))


// // Object.is()

// let fees = {
//     amout: 10000,
// }
// let fees1 = {
//     amout: 10000,
// }
// console.log(Object.is(fees.amout, fees1.amout))
// console.log(Object.isExtensible(fees, fees1))



