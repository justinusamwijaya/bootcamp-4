const ex = require("express");
const bopas = require("body-parser");
const files = require("express-fileupload");
const productRoute = require("./routes/products.js")

const up = ex();



up
.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
})
.use(bopas.json())
.use(bopas.urlencoded({extended:true}))
.use(files())
.use(ex.static("files"))
.use("/go",productRoute)
.listen(3000)