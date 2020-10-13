"use strict";

var express = require("express");
var path = require("path");
var app = express();
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(express.static(path.join(__dirname)));

app.get("/", function(req, res) {
    res.json('cool')
});

app.post('/data', function(req, res) {
    console.log(req.body)
    res.json('cooldata');
})

var port = 4790;
app.listen(port);
console.log(`view app at http://localhost:${port}`);

exports = module.exports = app;