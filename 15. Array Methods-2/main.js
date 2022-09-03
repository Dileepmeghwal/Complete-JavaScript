// fill
var arr = ['java','c++','python']
var $arr = arr.fill('bootstrap',1,2);
console.log($arr)


// create array using Array 
var createArray = Array.from("HEllo");
console.log(createArray)

// crate Array using function arguments

var fun = function arr(arguments){
    console.log(Array.from(arguments))
}
fun('Acciojob')


// filter

var newData = [2021,2022,2023,2024,2025]
var a = function year(y){
    return y >= 2023;
}

console.log(newData.filter(a));

