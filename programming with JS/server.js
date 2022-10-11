const http = require('http');
const fs = require('fs');
const app = http.createServer((req, res) => {

    // console.log(fs)
    if(req.url == '/index' ){
        fs.readFile('./index.html', (err, data) => {
        res.writeHead(200 , {'Content-Type': 'text/html'})
        
        res.write(data)
        res.end()
    })
}else{
res.write("Hello")
res.end()
    // console.log(req.url)
}
 

});

app.listen(9000, () => {
    console.log("Server is Running")
})