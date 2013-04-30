var http = require("http");
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	var x = 4+5;
	res.end('Hello World kitty:'+x);
	// version 1
}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');
