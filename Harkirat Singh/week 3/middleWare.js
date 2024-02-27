const express = require('express');

const app = express();

app.get("/health-checkup", function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    
    if (!(username === 'hemant' && password === 'pass')) {
        res.status(400).json ({
            msg: "something is up with our inputs"
        });
        return;
    }

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json ({
            msg: "something is up with our inputs"
        })
        return;
    }

    res.json({
        msg: "your kidneys are fine!"
    });
});

app.listen(3000);