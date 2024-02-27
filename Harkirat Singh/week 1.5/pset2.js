const fs = require("fs"); //extarnal file

fs.read("a.txt", "utf-8", function(err, data) {
    console.log(data);
})