//

// const n=5;

// for(let i=1; i<=5; i++){
//     console.log(`I love javaScript.`);
//     document.write("<h4>I love javaScript.</h4><br> ")
// }


// const n = 5;
// for(let i=1; i<=n; i++){
//     console.log(i);
//     document.write(i)
// }


/**---------------
 * Display Sum of n Natural Numbers
 */

// let sum = 0;
// const n =100;

// looping from i =1 to n
//in each iteration, i is increased by 1

// for(let i=1; i<=n; i++){
//     sum +=i;
//     document.write('sum: ' , sum);
// }

// let y= 5;
// let z = --y;
// console.log(y)

// let age =10;
// for(let age=0; age<100; age++){
//     console.log(age);
// }
// for(var i=0; i<10; i++){
//     console.log(i)
// }


/**************************************
 * JavaScript while and do...while Loop
 *************************************/
// let i = 1;
// while(i<=5){
    
// document.write(i + "<br>")
// i++;
// }

// let i=1; n=5;
// while(i<=n){
//     console.log(i)
//     i +=1;

// }



// let sum = 0;
// let num = parseInt(prompt("Enter a number: "));

// while(num >=0 ){
//     sum +=num;

//     num = parseInt(prompt('Enter a number'));
// }
// console.log(`The sum is ${sum}`);


/****************************
 *  do...while loop.
 ***************************/
// var i =12;
// while(i<=10){
//     document.write(i + '<br>')
//     i++;
// }

// var i=12;
// do{
//     document.write(i)
//     i++;
// }while(i<=10);



/*****************************
 *  break with for Loop
 * ********************/ 

// for(let i=1; i<=15; i++){
//     if(i==13){
//         break;
//     }
//     console.log(i);
// }




// break Statements

//  for(var i=0; i<=15; i++){
//     if(i == 10){
//         break;
//     }
//     console.log(i)
//  }


/***************
*********** break Statements// break Statements
*/

// for (let i=1; i<=5; i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i)
// }

// while
// let v = 1;
// while(v<=10){
//     v++;
//     console.log(v)
//     if(v==4){
//         break;
//     }
// }

// for(let p=1; p<=10; p++){
//     console.log(p)
//     if(p==5){
//         break;
//     }
// }

// let love = "payal";
// let other = "UNKNOWN"
// if(love ? love : !other){
//     for(i=0; i<=100; i++){
//         document.write('I love you ' + love + "<br>")
//         setTimeout(2000);
//     }
// }else{
//     document.write("Sorry " + other)
// }
// let payal = "Payal ";
// function lover(){
//     for(i=0; i<=50; i++){
//         document.write("I love you <br> " + payal)
//     }
// }
// lover(setTimeout(1000));

// function show(){

//     for(i=0; i<=10; i++){
//         document.write("i Love you <br>")
//     }
// }
// show()




// const myTimeOut = setTimeout(myGreeting, 2000);

// function myGreeting(){
//     for(let i=0; i<=100; i++){
//         document.write("I love you ")
//     }

// }


// function myStopFunction(){
//     clearTimeout(myTimeOut);
// }




// Turnary operaor

// let age = 18;

// console.log((age >= 18) ? "You can vote " : "you can't vote");



// PRACTICE FOR LOOPS

// for loop

// for(var i=0; i<=10; i++){
//     document.write(i)
// }


// while loop

// var x =0;
// while(x<=5){
//     document.write(x)
//     x++;
// }



// do while loop
// var y=0;
// do{
//     document.write(y)
//     y++
// }while(y<=10);



// for-in loop

// var temp= " ";
// var person = {fname: "Dileep",lname: "Meghwal", age: 23}
// for(value in person){
//     temp = temp + person[value] + " ";
//     // document.write(value)
// }
// document.write(temp)


//for-of loop using array
// var alphabates = ["a", "b", "c", "d"];

// for(value of alphabates){
//     document.writeln(value)
// }

// for(var i=0; i<=alphabates.length -1 ; i++){
//     document.write(alphabates[i]);
// }


// for-of loop for string

// var s = "sunny";
// // for(value of s){
// //     document.write(value + "<br>")
// // }
// for(var i=0; i<=s.length -1; i++){
//     document.write(s[i])
// }