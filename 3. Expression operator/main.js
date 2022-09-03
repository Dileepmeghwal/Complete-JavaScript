// 1. ***** Asssignment operator

// var x =10;
// var y =10;
// console.log(x,y)
// console.log("X and Y are equal: " + (x==y));    //invalid

// console.log("x and y are the same value  : " + `${x==y}`);



// 2. Arithmatic Operator

// console.log(3+4);
// console.log(3*4);
// console.log(3-4);
// console.log(24/4);
// console.log(40%4);

let m =5;
let n=10;
console.log('m and n : ' , m+n );
console.log('m and n : ' , m**n );

//  3. Increement Operator

/*--------Post Fix-------*/
// var num = 15;
// var newNum = num++;
// console.log(num);
// console.log(newNum);

var number = 10;
var number1 = number++;
console.log(number1)
console.log(number)

var a = 5;
var b= a++;
console.log(b)
console.log(a)
/*--------Pree Fix-------*/
var d = 10;
var c = ++d;
console.log(d)
console.log(c)
// var num = 15;
// var newNum = ++num;
// console.log(num);
// console.log(newNum);

var num = 15;
var newNum = ++num +4 ;
console.log(num);
console.log(newNum);

var num1= 10;
var num2 = ++num1 +4;
console.log(num1, num2)

// Comparision Operator


// eaual value
// var a = 10;
// var b = 10;
// console.log(a==b);

// not qual
// var a=5;
// var b="51";
// console.log(a != b)

// Strict equal to: 
// let o=10;
// let p=10;
// console.log(o===p);     //it check type also

// let o=10;
// let p="10";
// console.log(o===p); 

// *******Strict not equal to
let o=10;
let p="jiji";
console.log(o!==p);   


// Greater then
// var a=3; var b=4;
// console.log(a>b);

// less than
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b)

// Logical Operator

//AND///

// var a = 30;
// var b = 20;
// console.log(a>b && a<b && a<b && b<=a);

// const num1 =10;
// const num2 = 20;
// console.log((num1>1) && (num2<30))  //true



// console.log(true && true);  //true
// console.log(true && false); //false


/*
&&	Logical AND: true if both 
the operands are true, else returns false	x && y
*/ 


//Logical OR//

// var a = 23;
// var b = -3;
// console.log((a>b) || (b>0) || (b>0) );
// console.log(a<20 || b<0)



// console.log(true || true);  //TRUE
// console.log(true || false);     //true


// logical NOT
// console.log(!true); // false



// const num1 =10;
// const num2 = 20;
// console.log((num1>15) || (num2>30)) 

/*Return false when both are false either return true when any of one is true*/ 




// Bigint
// const value1 = 900719925124740998n;
// console.log(value1)


// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');
console.log(value1)
console.log(value2)


// **********JavaScript Object*******

// const student = {
//     firstname: 'Dileep',
//     lastName: "Kumar",
//     class: 12,
// }
// console.log(student);


// var v=2;
// console.log(v <= 3);


// let value = parseInt(prompt("Enter a value"));

// if(value%2 ===0){
//     console.log("Number is divisible");
// }else{
//     console.log("Not modules number!")
// }



/****************************
 * Ternary Operator
 *************************/

// let marks = 40;
// let result = (marks <45 ? "Fail" : "Pass");
// console.log(result)
// document.write(`${result}`)

// var x =7;
// var y= 5;
// x = x + y;
// // x = 5 + 7;
// x +=5
// x *=4
// document.write(`${x}`)


// var person = {
//     fname: "Dileep",
//     lname: "Meghwal",
//     age: 23
// }
// document.write(`${person.fname}`)


// delete person.lname //delete operator
// document.write(`${person.lname}`)