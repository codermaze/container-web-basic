'use strict';

var express = require('express');
var app = express();
const port = 3100;
var os = require("os");
var hostname = os.hostname();
console.log( hostname );

// Constants
const host = '0.0.0.0'; //Similar to 127.0.0.1

app.get('/', (req, res) => {
	var responder = "You are currently accessing  @ host : " + hostname + " - on server " + (process.env.APP_SERVER || "APP_SERVER NOT DEFINED");
	res.send(responder);
	console.log(responder);
});

app.set('port', process.env.PORT || port);

console.log(`Port : ${process.env.PORT}`);
console.log(`APP_SERVER : ${process.env.APP_SERVER}`);

app.listen(port, () => console.log(`Example app listening on port http://${host}:${port}!`));

