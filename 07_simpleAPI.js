const http = require("http");
const userData = [
{
name: "Umar",
age: 23,
email: "umar@test.com",
},
{
name: "sam",
age: 20,
email: "sam@test.com",
},
{
name: "peter",
age: 30,
email: "peter@test.com",
},
];
http
.createServer((req, resp) => {
resp.setHeader("Content-Type", "application/json"); // Set the content type to JSON
resp.write(JSON.stringify(userData)); // Convert the userData array to a JSON string
resp.end(); // End the response
})
.listen(6100);
