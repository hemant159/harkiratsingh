const express = require("express");
const app = express();

var users = [{
    name: "john",
    kidney: [{
        healthy: false
    }]
}]

app.use(express.json());

app.get("/", function(req, res) {
    const johnKidney = users[0].kidney;
    const numberOfKidney = johnKidney.length;

    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < numberOfKidney; i++) {
        if(johnKidney[i].healthy) {
            numberOfHealthyKidneys += 1;
        }
    }

    const numberOfUnhealthyKindeys = numberOfKidney - numberOfHealthyKidneys;

    res.json({
        numberOfKidney,
        numberOfHealthyKidneys,
        numberOfUnhealthyKindeys
    })
})

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidney.push({
        healthy: isHealthy
    })

    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req, res) {
    for (let i = 0; i < users[0].kidney.length; i++) {
        users[0].kidney[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req, res) {

    if (isThereABadKidney()) {
        const newKidney = [];
        for (let i = 0; i < users[0].kidney.length; i++) {
            if(users[0].kidney[i].healthy) {
                newKidney.push({
                    healthy: true
                })
            }
        }
        users[0].kidney = newKidney;
        res.json({msg: "done"});
    } else {
        res.status(411).json({
            msg: "You have no bad kindey"
        })
    }
})

function isThereABadKidney() {
    let atLeastOneUnHealthyKidney = false;
    for (let i = 0; i < users[0].kidney.length; i++) {
        if(!users[0].kidney[i].healthy) {
            atLeastOneUnHealthyKidney = true;
        }
    }
    return atLeastOneUnHealthyKidney;
}
app.listen(3000);