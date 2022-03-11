const express = require("express");
const app = express();
const path = require('path');

app.listen(3030, () => 
    console.log("Operación exitosa.")
);

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
});