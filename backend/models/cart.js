const mon = require("mongoose");

mon.connect("mongodb://localhost:27017/bootkem5",{useMongoClient:true})


const cartscm = new mon.Schema({
    ProductId:String,
    ProductName:String,
    Picture:String,
    Price:Number,
    Quantity:Number,
})

const cart = mon.model("cart",cartscm)

module.exports=cart;