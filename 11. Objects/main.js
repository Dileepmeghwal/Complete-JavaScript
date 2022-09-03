// 1. Literal Object

document.write("<h1>Literal Object</h1>");

let person = {
    fname: "Dileep",
    lname: "Meghwal",
    age: 23,
    eyeColor: "Black"
}
// document.write(person.fname + " " + person.lname)
document.write(`${person.fname + " " + person.lname + " " + person.age}`)
document.write("<br>")


/****************************
 * Creating an object using new keyword (Instance of an Object)
 ******************************/

document.write("<h1>using new keyword</h1>")

// let emp = new Object();
// emp.id = 1;
// emp.name = "Shyam Lal";
// emp.salary = 20000;

// for (value in emp) {
//     document.write(emp[value])
// }



/****************************
 * Creating an object using Object Constructor
 ******************************/

// function emp(id, name, salary) {
//     this.id = id;
//     this.name = name;
//     this.salary = salary;
// }

// var e = new emp(102, "Dileep", 200000);
// for (value in e) {
//     document.write(e[value])
// }



// define methos in object

// function emp(id, name, salary) {
//     this.id = id;
//     this.name = name;
//     this.salary = salary;

//     // method in object
//     this.updateSalary = updateSalary;

//     function updateSalary(newSalary) {
//         this.salary = newSalary;
//     }
// }


// let e = new emp(1, "Dileep", 20000);

// document.write(e.id + " " + e.name + " First Salary is " + e.salary + "<br>")
// e.updateSalary(52000);
// document.write((e.salary))





// Practice Object

// document.write("<br><br><h3>Practice for objects</h3> <br>")
// let mydata = {
//     rollno: 123,
//     user: "Dom",
//     year: 2021,
// }
// document.write(mydata.rollno)

// for (value in mydata) {
//     document.write(mydata[value])
// }


// new Keywors using create object

// let mystore = new Object();
// mystore.id = 101,
//     mystore.Name = "Macbook Pro",
//     mystore.address = "Near Shanti-vihar 201 Flat Opp."

// for(value in mystore){
//     document.write(mystore[value])
// }

// for(value of mystore){
//     document.write()
// }




// Consrtuctor

// document.write("<br><br>")
// function fruit(price, quantity) {
//     this.price = price;
//     this.quantity = quantity;

//     // Object Method

//     this.updatePrice = updatePrice;
//     function updatePrice(increse) {
//         this.price = increse;
//     }
// }

// let pullData = new fruit(150, "1kg");
// document.write("First Price: " + pullData.price + "<br>")
// pullData.updatePrice("New Price: " + 250);
// document.write(pullData.price)



// document.write("<br>")

// const data = new Object();
// data.id = 1;
// data.fname = "Dileep";
// data.empId = 123;

// for (value in data) {
//     document.write(data[value])
// }
// console.log(value)


// consructor
function userData(username, mobile, skype) {
    this.username = username;
    this.mobile = mobile;
    this.skype = skype;
    // let apply change method
}

const fetch = new userData("dileep@gmail.com", 8696313143, 'abc@skyp.com');

for (value in fetch) {
    document.write(fetch[value] + "<br>");
}






// let apply change method

function facebook(uname, psw, age) {
    this.uname = uname;
    this.psw = psw;
    this.age = age;

    // method update

    this.mypass = mypass;

    function mypass(newPass) {
        this.psw = newPass;
    }


}

const target = new facebook('abc', 123, 14);

target.mypass(456)

document.write(target.psw);

