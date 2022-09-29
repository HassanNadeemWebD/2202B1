let obj = {
    name: "Hassan",
    contact: "03482233981",
    city: "Karachi",
    gender: "Male",

    lastName: "Nadeem",
    result: () =>
        console.log("my name is " + obj.name + " " + obj.lastName)
    // console.log(`My Name is ${obj.name + " " } Thank You !  `)

    // result :function abc(){
    //     console.log("my name is " + this.name + " "+ this.lastName)
    // },


}
let myCountry = "Pakistani"


// let abc = () => {
//     console.log("Hello")
// }

// abc()
obj.result(myCountry);

let myFunc = () => {

    console.log("myFunc")


}

// let userName = prompt("Enter Your Name")

// let welcome = (name) => {

//     console.log(`Welcome ${name}`)

// }

// welcome(userName)

// myFunc();

// console.log(myFunc);
// () => {



//     console.log("Hello")
// }

// localStorage.setItem("Name" , "Hassan")
// document.write(localStorage.getItem("Name"))
// localStorage.clear()
// sessionStorage.setItem("Name" , "Hassan")
// document.write(sessionStorage.getItem("Name"))


let getValue = () => {
    let myName = document.getElementById("name").value;

    document.getElementById("welcome").innerHTML = `Welcome ${localStorage.getItem("Name")}`


}   