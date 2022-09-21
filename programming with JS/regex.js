let contactRegex= /^((03)|(\+923))[0-9]{9}$/;
let num = prompt("Enter Your Contact")
let nicRegex = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}/;

console.log(contactRegex.test(num))

if(contactRegex.test(num)){

    console.log("your contact is valid")
}
else{

    console.log("your contact is not valid")


}