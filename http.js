import http from "http";
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("this is home");
    res.end();
  } else if (req.url === "/about") {
    res.write("about url");
    res.end();
  } else {
    res.write("not found");
    res.end();
  }
});
server.listen(3000);
console.log('listening on port 3000')