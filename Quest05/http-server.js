const http = require("http")

const hostname = process.env.BIND_IP || "0.0.0.0"
const port = process.env.BIND_PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/plain")
  res.end("Hello, World!\n")
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
