const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/', function(req, res) {
    console.log(req.body);
    res.send(`Hello World!`);
}); 

app.listen(port, () => {
    console.log(`Example is running in port number ${port}`)
});