//const jsonServer = require('json-server')
//const server = jsonServer.create()
//const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

//server.use(jsonServer.bodyParser)
//server.use(middlewares)
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  let users = require('../node-test/data/data-test.json');
 // res.json(users);
  res.write((users.users[0].name).toString());
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

