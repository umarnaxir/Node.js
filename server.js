const http = require('http');
http.createServer((request, response)=>{
    response.write("<h1>Hello, This is my first Server in Node Js</h1>");
response.end("Hello");
}).listen(5800);