const fs = require("fs");

function ownAsync(cb) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
        cb(data);
    });
}

function onDone(data) {
    console.log(data);
}

ownAsync(onDone);