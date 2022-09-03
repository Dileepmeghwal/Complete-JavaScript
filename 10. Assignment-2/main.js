// Q.1 

// let x = true;
// if(x=true){
//     document.write("Value of ",+ x + " is true")
// }else{
//     document.write("Value of ",+ x + " is false")
// }


// Q.2

// let today = "monday";

// if(today = "monday"){
//     document.write(today)
// }if else{

// }

// Q.3 array create for day

// let days = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"];

// Using for loop
// for(let i=0; i<=days.length -1; i++){
//     document.write(days[i]+ "<br>")
    
// }

// while loop
// var i=0;
// while(i<=days.length-1){
    
//     document.write(days[i]+ "<br>");
//     i++;
// }


// do...while loop

// var i =0;
// do{
//     document.write(days[i] + "<br>");
//     i++;
// }while(i<=days.length-1);



// for...in loop

// for(value in days){
//     document.write(days[value] + "<br>")
// }


// const person = {fname: "Dileep", age:23}
// let text = "";
// for(let x in person){
//     document.write(text += person[x] + " ");
// }

// for...of loop

// for(value of days){
//     document.write(value);
//     console.log(days[value])
// }



// var p = 20;
// do{
//     document.write(p + "<br>");
//     p++;
// }while(p<=10);




//Q.2 alert using function

// function show(){
//     alert("Dileep Meghwal");
// }
// show()


// Q.3 Find max number using apply mathod

// const num = [1,2,3,4,5,10,20];

// let get = Math.max.apply(null, num);
// let min = Math.min.apply(null, num);
// document.write("This is Max: " + get)
// document.write("<br>")
// document.write("This is min: " + min);



// Q.4 wjsp using function getname

let person = {
    fname: "Dileep",
    lname: "Meghwal",
    fullname: function(){
        return `${this.fname} ${this.lname}`;
    }

}


let fullname = person.fullname.bind(person)
document.write(fullname());




var a=20;
if(a>10){
    document.write("value of a is greater than 10"); 
}