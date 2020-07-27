var express = require('express');
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();
server.use(jsonParser);

server.use(express.static(__dirname));

server.get("/", function (request, response) {
    console.log("Start page requested.");
    response.send("<h1>Lesson 9</h1>");
});

server.get("/formGet", function (request, response) {
    console.log("Form receipted by GET.");
    console.log(request.query);
    var obj = request.query;
    obj.userSurname += ".ValidatedByGET";
   obj.userName += ".ValidatedByGET";
    obj.userAge += ".ValidatedByGET";
    obj.userAddress += ".ValidatedByGET";
    response.send(JSON.stringfy(request.query));
});

server.post("/formPost", function (request, response) {
    console.log("Form receipted by POST.");
    console.log(JSON.parse(request.body));
    var obj = request.body;
   obj.userSurname += ".ValidatedByPost";
    obj.userName += ".ValidatedByPost";
    obj.userAge += ".ValidatedByPost";
    obj.userAddress += ".ValidatedByPost";
	response.send(JSON.stringfy(request.body));
});







server.listen(3000);