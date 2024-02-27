const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-checkup", function (req, res) {
    const kidneys = req.body.kidneys;
    const kindeyLength = kidneys.length;

    res.send("you have " + kindeyLength + " kindeys");
});

app.use(function (err, req, res, next) {
    res.json({
        msg: "Something is up with our server"
    })
});

app.listen(3000);