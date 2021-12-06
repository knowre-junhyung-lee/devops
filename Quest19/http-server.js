var fs = require('fs');
var dir = "./"
var fileNmae = "./http-server.js"
const http = require("http")
var files;

const hostname = process.env.BIND_IP || "0.0.0.0"
const port = process.env.BIND_PORT || 3000

const response =JSON.stringify({ message : "Hello, World!" })

const server = http.createServer((req, res) => {
  files = fs.readdirSync(dir);
  fs.readFileSync(fileNmae);
  console.log(files);
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
  res.end(response)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
