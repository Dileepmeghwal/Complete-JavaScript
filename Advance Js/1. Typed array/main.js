

// // copywithin
// var arr = [1,2,3,4,5,6,7]

// // arr.copwiithin(target)

// // var x = arr.copyWithin(2)

// // arr.copwiithin(target, start)
// // var x = arr.copyWithin(2,3)

// // arr.copwiithin(target, start, end)
// var x = arr.copyWithin(1,2,4)


// console.log(x);



// spread

function addNumbers(a,b,c,...other){
    console.log(other)
    return a+b+c;
}
const res = addNumbers(2,3,4,8,9);

console.log(res);
