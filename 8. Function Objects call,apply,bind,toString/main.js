// class car{
//     var = model;
//     var = color;

//     car(model, color){
//         this.model = model;
//         this.color = color;
//     }

// }
// var xuv = new car("XUV", "Blcak");
// var swift = new car("Swift", "white");



var add = new Function('num1', 'num2', 'return num1 + num2');

document.write(add(30,30) + "<br>");



// Employe Data call method

// function Emp(id, name){
//     this.id = id;
//     this.name = name;
// }

// function PermanentEmp(id, name){
//     Emp.call(this,id, name);
// }
// document.writeln(new PermanentEmp(1, "Dileep").id);
// document.writeln(new PermanentEmp(1, "Dileep").name);


function temp(id,name,roll){
    this.id = id;
    this.name = name;
    this.roll = roll;
}
function perma(id, name, roll){
    temp.call()
}







// const person = {
//     fname: "Dileep",
//     lname: "Meghwal",
//     fullname : function(){
//         return this.fname + " " + this.lname;
//     }


// }
// document.write(person.fullname())



// const person = {
//     fullname : function(){
//         return this.fname + " " + this.lname;
//     }
// }


//    const  person1 ={
//         fname: "jhone",
//         lname: "Doe",
//     }
//     const person2 = {
//         fname: "marry",
//         lname: "Dow",
//     }


// // document.write(person.fullname())
// document.write(person.fullname.call(person2))


/*CALL METHOD USING PARAMETER */
// const person = {
//     fullname: function(city, country){
//         return this.fname + " " + this.lname + " " + city + " " + country;
//     }
// }
// const person1 = {
//     fname: "Ajay",
//     lname: "Suneja"
// }
// document.write(person.fullname.call(person1, "Rajasthan", "India"))




/*-------------
-------Apply() Method
-------------- */

// const person = {
//     fullname: function(city, country){
//         return this.fname + " " + this.lname + " "+ city + " " + country;
//     }
// }
// const person1 = {
//     fname: "Dileep",
//     lname: "Meghwal",
// }
// document.write(person.fullname.apply(person1, ["Udaipur", "India"]))


/****Math.max() */

// const arr = [1,2,3,40];
// const max = Math.max.apply(null,arr);

// const min = Math.min.apply(null, arr);
// document.write("This is max:  " + max)
// document.write("<br>")
// document.write("this is min: "  + min)
// document.write("<br>")
// for(value of arr){
//     document.write(value)
// }


// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8];


// for (value of arr1)
//     document.write(value)

// document.write("<br>")

// for (value of arr2) {
//     document.write(value)
// }

// arr1.push.apply()
// document.write(arr1.push.apply(arr1, arr2))




/*****************************
 * Bind() Methos
 * ***********************/

// const website = {
//     names: "W3school",
//     getdata: function(){
//         return "Hello" + `${this.names}`
//     }

// }
// const website1 = {
//     names: "google",
// }
// const unboundGetName = website.getdata;
// const boundGetData = unboundGetName.bind(website);

// document.write(boundGetData())


// const person = {
//     fname: "Dileep",
//     lname: "Meghwal",
//     fullname: function (city, country) {
//         return `${this.fname} ${this.lname} ` + city + " " + country;
//     }
// }

// const member = {
//     fname: "Jhone",
//     lname: "Nilson",
// }

// const fullname = person.fullname.bind(member, "Udaipur", "India");
// document.write(fullname())
// console.log(fullname())