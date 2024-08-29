import http from "http";

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello, Nodejs!\nHostname: ${hostname}\nPort: ${port}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//to stop server after sometime
// কিছু সময় পরে সার্ভারটি বন্ধ করা হচ্ছে
setTimeout(() => {
  server.close(() => {
    console.log("Server stopped.");
  });
}, 300000); // 5 সেকেন্ড পরে সার্ভারটি বন্ধ করা হবে
