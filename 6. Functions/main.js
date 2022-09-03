

// function dileep() {
//     document.write("Hi! dileep")
// }
// dileep();  //function call


/***********************
//  * Function Parameters
 ***********************/

// function add(a,b){
//     console.log(a+b);
// }


// add(1,10);
// add(10, 20);



// alert 
function show(){
    // alert("Hii Iam cliked!!!")
    let a=20;
    let b=2;
    document.write(a+b);
}

// function sum(){
//     var x=5;
//     var y=10;
//     var z = x+y;
//     document.write(z);
// }
// sum()


function greet(){
    return `Hi There...`
}
document.write(greet())





// checking sum zero -problem 1

//[-5, -4,-3,-2,0,2,4,6,8]
//[-4 4] -> output

// function getSumPairZero(array){
//     for(let number of array){
//         // console.log(number)
//         for(let j=1; j<array.length; j++){
//             if(number + array[j] === 0){
//                 return [number, array[j]];
//             }
//         }
//     }
// }
// // getSumPairZero([-5, -4,-3,-2,0,2,4,6,8]);

// const result = getSumPairZero([-5, -4,-3,-2,0,2,4,6,8]);
// console.log(result)