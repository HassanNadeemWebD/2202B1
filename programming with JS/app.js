// // var a = 452;
// // console.log(a);

// // var a = 123;
// // console.log(a)

// let a = 14;
// a = 15;
// console.log(a);
// {
//     let a =25;
// console.log(a)

// }
// const pi = 3.142;
// console.log(pi) 

// {
//     const pi = 4;
//     console.log(pi)
// }
// // pi = 2;


// Question 4 : Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise


let userInput;
userInput = prompt("Enter Any Three Digit Number");
console.log(userInput.length);
if(userInput == 'a' || userInput == 'e' || userInput == 'i' || userInput == 'o' || userInput == 'u' )
{
   console.log(userInput + " is a vowel") 
}
else{
    console.log(userInput + " is not a vowel") 
}

// if (userInput.length <= 3) {
//     if (userInput > 0) {

//         console.log(userInput + " " + "is Postive Number")
//     }
//     else if (userInput < 0) {

//         console.log(userInput + " " + "is Negative Number")
//     }
//     else if (userInput == 0) {

//         console.log(userInput + " " + "is zero Number")
//     }
//     else {

//         console.log("wrong character")

//     }
// }
// else{
// console.log("Your Input Having " + userInput.length + " Characters which is Invalid")

// }