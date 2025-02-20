const http = require('http');
const port = 3000;
const server = http.createServer(async(req, res)=>{
    //res.statusCode=200;
    //res.setHeader('Content-type','text/plain');
    res.writeHead(200,{'content-type':'text/html'});
    //res.write("Hello CSE-C Students")
    const fs = require("fs/promises");
    const data = await fs.readFile("./home.html","utf-8");
    res.end(data);
});
server.listen(port, ()=>{
    console.log(`server is running on this port ${port}`);
});