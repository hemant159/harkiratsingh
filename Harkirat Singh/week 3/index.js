const express = require("express");

const app = express();

app.get("/", function (req, res, next) {
    console.log("hi there from req1");
    next();
}, function (req, res) {
    console.log("hi there from req2");
});

app.listen(3000);