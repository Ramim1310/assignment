const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 5500;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
  
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("This is the Home Page");
  } else if (req.url === "/about") {
    
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("This is the About Page");
  } else if (req.url === "/contact") {
   
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("This is the Contact Page");
  } else if (req.url === "/file-write") {
    
    fs.writeFile("demo.txt", "hello world!", (err) => {
      if (err) {
        console.log(err);
        res.statusCode = 500;
        res.end("Error writing file");
      } else {
        res.statusCode = 200;
        res.end("File written successfully");
      }
    });
  } else {
   
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Page not found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



