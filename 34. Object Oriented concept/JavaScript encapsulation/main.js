// class in js

// class  emp {
//     constructor(id, name){
//         this.id=id;
//         this.name=name;
//     }
//     data(){
//         document.write(this.id + " " + this.name + "<br>");
//     }
// }
// var object = new emp(12, "ajay");
// var object1 = new emp(112, "Najay");
// object.data();
// object1.data();
// console.log(object)
// console.log(object1)



// class expression
// var obj = new student("Sunil", 5);
// obj.objectm();
// var student = class{
//     constructor(name, std){
//         this.name=name;
//         this.std=std;
//     }
//     objectm(){
//         document.write(this.name + " " + this.std);
//     }

// }


// class job {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// var x = new job("Vihan", 32);
// console.log(x)



// class john {
//     constructor() {
//         this.name = "Jhon";
//         this.age = 23;
//     }
//     method() {
//         document.write(this.name + " " + this.age);
//     }
// }
// var x1 = new john();
// console.log(x1.method())

// // function Object constrctor
// function emp(id, name) {
//     this.name = name;
//     this.id = id;
// }

// var f = new emp(12, "njsdd")
// console.log(f)


// // classExpresion
// // unamed class
// var cat = class {
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//     }
// }

// var c = new cat('Sunny', 'Brown');
// console.log(c)


// // named class
// var car = class cars{
//     constructor(model,color,brand){
//         this.model=model;
//         this.color=color;
//         this.brand=brand;
//     }
// }

// var modify = new car(5, "Blaak","BMW");
// var modify1 = new car(7, "White","Audi");
// var modify2 = new car(8, "Red","MercyGls");
// console.log(modify, modify1, modify2)



class Employe{
    constructor(){
        var name;
        var age;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getAge(){
        return this.age;
    }
    setAge(age){
        this.age = age;
    }
}

var x = new Employe();
x.setName("Raman Jain");
x.setAge(32);
document.write(x.getName() + x.getAge())