const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})


const goPrev = () => {

    counter--
    slideImg()
}


const goNext = () => {
    counter ++
    slideImg()
}



const slideImg = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        })
}


const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj)
console.log(JSON.stringify(obj))


const x = "Dileep Meghwal"
const hello=()=>{
    return `${x}`
}
console.log(hello())


greet = (val) => "Hey Dileep" + val;
console.log(greet(" Welcome!"))

const Jay = (e) => {
    return "Hello Ram " + e;
}
console.log(Jay("Congratulation!"))



