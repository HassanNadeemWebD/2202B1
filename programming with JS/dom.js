// console.log("Learning DOM")
// DOM : Document Object Model
// console.log(document.getElementById("myjson").innerText)
// document.getElementById("myjson").innerText = "Pakistan Zindabad";
function myfunc() {


    document.getElementById("myjson").style.display = "block"


}



function changeText() {

    if (document.getElementById("myjson").innerHTML == "Welcome Aptech") {
        // document.getElementById("span").innerText.style.color = "blue";

        document.getElementById("myjson").innerHTML = "Pakistan Zindabad"



    }
    else {

        document.getElementById("myjson").innerHTML = "Welcome Aptech"



    }


}
function submit() {


console.log("submit")
let firstName = document.getElementById("firstName").value
let lastName = document.getElementById("lastName").value
    // console.log(document.getElementById("firstName").value)
document.write("First Name: " + firstName + "<br/>" )
document.write("Last Name: " + lastName)




}
// document.querySelectorAll(".para").style.backgroundColor = "red";
// console.log(document.querySelector("#myjson").innerText) ;
// console.log(document.querySelectorAll(".para").style.backgroundColor = "red")

function changeColor(){


    let para = document.getElementById("para1");
    para.classList.toggle("mypara")


}