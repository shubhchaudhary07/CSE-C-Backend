const http = require("http");
const users = [
  { id: 1, name: "Shubh", email: "shubhrawat718@gmail.com" },
  { id: 1, name: "raj", email: "raj718@gmail.com" },
  { id: 1, name: "ramesh", email: "ramesh718@gmail.com" },
];
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  const namedata = users.map((user)=>{
    return user.name;
  })
  res.end(JSON.stringify(namedata));
});
const port = 3000;
server.listen(port, () => {
  console.log(`Server Running at http://locahost:$(port)`);
});
