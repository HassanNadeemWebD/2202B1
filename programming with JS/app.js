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


// let userInput;
// userInput = prompt("Enter Any Three Digit Number");
// console.log(userInput.length);
// if(userInput == 'a' || userInput == 'e' || userInput == 'i' || userInput == 'o' || userInput == 'u' )
// {
//    console.log(userInput + " is a vowel") 
// }
// else{
//     console.log(userInput + " is not a vowel") 
// }

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

// let arr = [1,2,3,4, "Apple" , "mango" , true , null];
// let userInput = prompt("Input any Word Match or Enter Zero");
// if(userInput == 0)
// {
// let userInput2 = parseInt(prompt("Input any Number Match"));
// console.log("The Index of Your Input Number is " + arr.indexOf(userInput2));


// }else{

// console.log("The Index of Your Input Word is " + arr.indexOf(userInput));

// }
// console.log(userInput)
// arr.push("abc")
// arr.push( userInput)
// console.log(arr)
// console.log(arr.indexOf(userInput))
// console.log(typeof userInput)

let obj = {
    name:"abc" ,
    contact: "0348236583",
    passORfail: true,
    hobbies: [1, 2, 3, 4, "Apple", "mango", true, null],
    bio: {
        fatherName: "def",
        gender: "male",
        siblings: ["xy", "Hiii", "kl"]
    }
}

console.log(obj)
document.write(JSON.stringify(obj));
let json = JSON.stringify(obj);

function myfunc() {
    let json = JSON.stringify(obj);

    document.getElementById("myjson").innerHTML = obj.bio.siblings[1];

}
for (let i = 0;  i <=100 ; i++) {
    console.log(i);
    
}
// document.getElementById('myjson').innerHTML = json;

let num = prompt("Enter any Number for Table");
parseInt(num);
for(let i = 1; i <= 10; i++ )
{
    let result;
    result = num * i;
    //  3 x 2 = 6
    console.log( num + "\n x" + "\n" + i + "\t =" +  "\t" + result )
}
// console.log(result)   error ! not defined 