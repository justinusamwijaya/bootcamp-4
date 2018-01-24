const mon = require("mongoose");

mon.connect("mongodb://localhost:27017/bootkem5",{useMongoClient:true})


const productscm = new mon.Schema({
    Nama:String,
    Harga:Number,
    Kategori:String,
    Gambar:String
})

const product = mon.model("products",productscm)

module.exports=product;