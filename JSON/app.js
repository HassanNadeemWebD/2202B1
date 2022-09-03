let obj = {
  name: "Uzair",
  address: "Karachi",
  contact: 31020565,
  passed: true,
  fruits: ["apple", "mango", "grapes"],
};

function myfunc() {
  // alert("myfunc")

  let elem = (document.getElementById("container").innerHTML =
    obj.name + ":" + "My favourite fruite is" + " " + obj.fruits[2]);
}

// document.write(obj.name);
// document.write(obj.fruits[2]);
// alert("my favourite fruite is" + " " + obj.fruits[2])

// document.write(obj)
console.log(obj);

let stringify = JSON.stringify(obj);
document.write(stringify);

let myJSON = ` {
    "name": "Hamza",
    "address": "Karachi",
    "contact": 310320565,
    "passed": false
}`;

// console.log(myJSON)
// document.write(myJSON)

let parsed = JSON.parse(myJSON);
console.log(parsed);
document.write(parsed);


fetch("https://api.cricapi.com/v1/cricScore?apikey=8c1e8d9a-02a3-426a-87fd-4825ea7a80fc")
	.then(result => result.json())
	.then(result => {
		console.log("We have the result",result);
    document.getElementById('result').innerHTML = "Yesterday" + " "+ result.data[26].status;
    
	})
	.catch(err => {
		console.log("An error occured. Please check your code",err);
	});