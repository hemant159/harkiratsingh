const express = require("express");
const app = express();

function oldEnoughMiddleWare(req, res, next) {
    const age = req.query.age;

    if (age >= 14) {
        next();
    } else {
        res.json({
            msg: "sorry you are not of age yet"
        });
    }
}

app.get("/ride1", oldEnoughMiddleWare, function(req, res) {
    res.json({
        msg: "you have sucessfully riden ride 1"
    });
});

app.get("/ride2", oldEnoughMiddleWare, function(req, res) {
    res.json({
        msg: "you have sucessfully riden ride 2"
    });
});

app.listen(3000)