let mypromise = new Promise(function prom(resolve, err) {

    let a = 6 + 3;

    if (a <= 10) {

        resolve()

    } else {
        err()
    }




})


mypromise.then(() => console.log("Success")).catch(() => console.log("error"))
// console.log("Hello")
console.log("first")
