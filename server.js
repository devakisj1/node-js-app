var http=require('http');
var server=http.createServer(function (req,res) {
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('hello');
});
server.listen(2000,'127.0.0.1');
console.log('welcome');
