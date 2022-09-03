

// class Employee {
//     constructor(id, name, age) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
//     methos() {
//         var s = document.write(this.id + " " + this.name + "" + this.age)

//     }
// }

// var e = new Employee(12, "Jay", 34)
// e.methos()


// // expression class
// var abc = class {
//     constructor(id, name, age) {
//         // this.id = 122;
//         // this.name = "Dileep";
//         // this.age = 45;
//         this.id= id;
//         this.name=name;
//         this.age=age;
//     }
//     call() {
//         document.write("<br>" + this.id + " " + this.name + " " + this.age);
//     }

// }
// var c = new abc(12, "jaony", 44);
// c.call();
// c.call();


// 


/* Add propert value */


// function Employee(firstnName, lastName) {
//     this.firstnName= firstnName;
//     this.lastName= lastName;
// }

// // Employee.prototype.fullname = function(){
// //     return this.firstnName + " " + this.lastName;
// // }
// Employee.prototype.company = "LearnVearn";

// var emp1 = new Employee('Rahul', "Bose");
// var emp2 = new Employee('Manooj', "Sai");

// document.write("<br>"+emp1.firstnName + " " + emp1.lastName +" "+ emp1.company)
// // document.write("<br>"+emp2.fullname())


function Car(model, color){
    this.model=model;
    this.color=color;
}

Car.prototype.fullname = function(){
    return this.model + " color is " + this.color + "  " +  this.version;
}
Car.prototype.version = "GLS-10"

const res = new Car("BMW", "Blue");
console.log(res.fullname())
console.log(res.version)
