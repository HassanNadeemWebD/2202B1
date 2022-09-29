// console.log("Function.js")
// constructor function
let obj = {
    name: "Hassan",
    contact: "0347125698",
    gender: "Male",
    city: "Karachi"
}



function Obj(fullName, phoneNo, myGender, sheher
) {
    this.name = fullName;
    this.contact = phoneNo;
    this.gender = myGender;
    this.city = sheher;


}

let myObj = new Obj("Muhammad Shahzaib", "0310254698", "Male", "Karachi");

console.log(myObj)
let myObj2 = new Obj("Areeb", "0321369871", " null", "Lahore");
console.log(
    myObj2)


function add(num1, num2, callback) {
    console.log("add")
    let sum = num1 + num2;
    callback(sum)
    console.log(sum)
    // document.write(sum)
    // console.log(sum)
    // callback(sum)

    // sum == addition

}

function display(sum) {

    document.getElementById("add").innerText = sum;


}
let userInputNum1 = parseInt(prompt("Enter Number 1"))
let userInputNum2 = parseInt(prompt("Enter Number 2"))



add(userInputNum1, userInputNum2, display)

// setTimeout(add(2,6) ,3000)
// setInterval("add(2,6)" ,1000)


