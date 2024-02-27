const fs = require("fs")

function readFile() {
    fs.readFile("a.txt", "utf-8", function(err, data) {
        const cleanedData = data.split('\n').map(function(line) {
            return line.trim().replace(/\s+/g, ' ');
        }).join('\n');

        fs.writeFile("a.txt", cleanedData, "utf-8", function(err) {
            console.log("File cleaned sucessfully!")
        });
    });
}

readFile();