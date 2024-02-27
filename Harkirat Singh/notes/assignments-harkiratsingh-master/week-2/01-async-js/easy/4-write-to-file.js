const fs = require("fs");

const data = "write to the file";

function hemantwritefile() {
    fs.writeFile("a.txt", data, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("file written sucessfully");
        }
    });
}

hemantwritefile();