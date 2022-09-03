// const arr = Array.from("Dileep Meghwal");
// const arrOf = Array.of("Dileep Meghwal",1,2);

// console.log(arr)
// console.log(arrOf)

// var person= "Dileep"
// const b = function greet() {
//     return `Congratulation!  ${person}`
// }
// console.log(b())


// forEach()
// var arr = [10, 20, 30, 40, 50]
// var x = arr.map(() => {
//     return arr >34;
// })
// console.log(x)


var age = [10, 20, 30, 40, 50]
// var x = arr.forEach(function arr(a){
//     console.log(a*3);
// })
var findAge = age.forEach(function node(val) {
    console.log(Array.of(val).filter((e) => e > 30))
});


var numbers = [20,40,60,80,100]
// var dubbed = numbers.map(function add(a){
//     return a;
// });
console.log(numbers.map((v) => v+2))
console.log(numbers.forEach((ar)=>{
    return ar
}))

const prices = [100, 200, 300, 400, 500];
        function filt(amount) {
            return amount > 100;
        }
        console.log(prices.filter(filt))
        console.log(prices.filter((amount) => amount > 100))



// const user = "@#e3r32r2";
// var Name = "Dileep Meghwal";
// var email = "dileepmeghwal@gmail.com";
// var password = "123223";
// var confirm = "123223";
// var count = 0;
// var isLoggedIn = false;

// document.write(
// `   <br><br><br>usename: ${user}<br>
//    Name: ${Name}<br>
//    Email: ${email}<br>
//    Password: ${password}<br>
//    Confirm: ${confirm}<br>
//    Count: ${count},<br>
//    Login: ${isLoggedIn}`
// )



const num = [45, 4, 9, 16, 25];

let modify = num.forEach((value, index,num) => {
    console.log(value,index,num)
})

const fruit = ['apple', 'angoor','kela','papita'];

fruit.map((curElem, index, arr) => {
    console.log(curElem,index,arr)
})



{
    var axios = "Dileep";
}
console.log(axios)

function main(){
    let str = "yummy";

}
main()
console.log(str)



