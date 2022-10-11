onmessage = (a) =>{
 
    console.log(a.data)
    // console.log("Started")
    let result = 0;
    for (let i = 0; i <= 10000000000; i++) {
        // console.log("hi")

        result += i;    // result = result +i;


    }
    postMessage(result)

}