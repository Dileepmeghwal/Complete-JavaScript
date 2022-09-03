//******** */ JavaScript if Statement

// if(condition){
//     // the body of if
// }

// let age = 18;
// if(age > 18 || age >=18){
//     console.log("You can Vote ");
// }else{
//     console.log("You can't vote");
// }


// ---------------------------

// var age1 = 18;
// var age1 = prompt("Enter Your age");
// if(age1 >=18){
//     document.write("<br> Congrats! you can vote.")
// }
// else{document.write("<br> Sorry! not eligible")}

    // let age = parseInt(prompt("Enter your age ?"));

    // if(age > 18 || age == 18){
    //     document.write("You can vote");
    // }else{
    //     document.write("You are not eligible for vote")
    // }

    // const number = prompt("Enter a number: ");

    // if(number < 0){
    //     document.write("Number is nagative: " + number);
    // }else{
    //     document.write("Number is positive: " + number)
    // }


    // const num = prompt("Enter num");
    // if(num > 0){
    //     console.log("Poitive Number");
    // }if(num == 0 ){
    //     console.log("Num is equal")
    // }


    /************ 
    JavaScript if...else statement
    *************/

    // const value = prompt("Enter amount");

    // if(value > 12 || value == 12){
    //     console.log("This is dourjan");
    // }else{
    //     console.log("it is no dourjan");
    // }

    // var a = parseInt(prompt("Enter number"))
    // if(a>0){
    //     document.write(a, " is greter then 0");
    //     console.log("jcnskjncs")
    // }


    /**
     * JavaScript if...else if statement
     */

    // let marks = prompt("Enter Marks");
    // if(marks < 60){
    //     console.log("Grade: F");
    // }else if(marks > 70 && marks >100){
    //     console.log("Grade: D");
    // }else if(marks > 80){
    //     console.log("Grade: A")
    // }else{
    //     console.log("Fails");
    // }




    /**=========Leap Year========== */

    // function checkLeapYear(year){
    //     if((0 == year%4) && (0 != year % 100)|| (0 == year% 400)){
    //         console.log(year + ' is a leap year');
    //     }else{
    //         console.log(year + ' is not leap yaer');
    //     }
    // }
    // const year = prompt("Enter a year: ");
    // checkLeapYear(year);



    // var year = parseInt(prompt("Enter year"));
    // if((year%4 ==0) && (year%100 != 0) ||(year%400 == 0)){
    //     console.log(year + " is leap year");
    // }else{
    //     console.log(year + " is not leap year");
    // }

    // var year = 2011;

    // if (year % 4 == 0) {
    //     if (year % 100 != 0) {
    //         if (year % 400 == 0) {
    //             console.log(" The year " + year + " is a leap year ");
    //         } else {
    //             console.log(" The year " + year + "is not a leap year");
    //         }
    //     }

    // } else {
    //     console.log(" The year " + year + " is not a leap year ");
    // }

    // const img = new Image();
    // img.src = '//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png';

    // img.onload = function(){
    //     console.log('width ' + this.width);
    //     console.log('height ' + this.height);
    // }


    /*---------------------
    Nested if...else Statement
    -------------------------*/

    // let number = prompt("Enter number: ");
    // if(number >= 0){
    //     if(number == 0){
    //         console.log("you entered number 0");
    //     }else{
    //         console.log("You enterd positive number");
    //     }
    // }else{
    //     console.log("You entered a nagative number");
    // }


    // var marks = 34;
    // if(marks >=35){
    // document.write("candidate is passed!")
    // }else{
    //     document.write("Fails")
    // }



    // else if
//     var marks = 20;
// if (marks >= 85 && marks >= 95) {
//     document.write("Greate Score");
// } else if (marks >= 65) {
//     document.write("You can do better!");
// } else if (marks >= 55) {
//     document.write("You Just Passed")
// }
// else if (marks >= 45) {
//     document.write("Got passed");
// } else {
//     document.write("Sorry! you're failed");
// }


var x = prompt("Enter age: ");
if(x >= 21){
    if(x > 21){
        document.write("You are able to merry!");
    }else{
        document.write("You're not able to merry!");
    }
}else{
    document.write("sorry....")
}