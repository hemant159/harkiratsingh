const fs = require("fs");

function hemantreadfile() {
    fs.readFile("a.txt", "utf-8", function(err, data) {
        console.log(data);
    })
}

hemantreadfile();

let count = 0;

for (let i = 0; i < 100000000000; i++) {
    count++;
}

console.log(count);