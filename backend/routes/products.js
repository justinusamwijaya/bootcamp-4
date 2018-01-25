const ex= require("express");
const pro = require("../models/products.js");
const uid = require("uuid/v4");
const cart = require("../models/cart.js")

const roo = ex.Router();

roo
.post("/add",(req,res)=>{
    if (!req.files.Gambar) {
        return res.status(400).send("No files were uploaded");
    }

    let image = req.files.Gambar;
    let imageName = uid() + ".png"
    image.mv("./files/gambar/" + imageName, (error) =>{
        if(error) return res.status(500).send(error);

        let newpro = new pro({
            Nama:req.body.Nama,
            Harga:req.body.Harga,
            Kategori:req.body.Kategori,
            Gambar:"http://localhost:3000/gambar/"+imageName
        })

        newpro.save((error) => {
            if (error) {
                res.status(500).send(error);
            }
            else{
                res.json(newpro);
            }
        });

    })

})
.get("/list",(req,res)=>{
    pro.find({},(error,x)=>{
        if(error)res.status(500).send(error);
        else res.json(x);
    })
})
.get("/cate",(req,res)=>{
    pro.find({},(mai,moi)=>{
        if(mai)res.status(500).send(mai);
        else{
            array = []
            array.push(moi[0].Kategori)
            for(i=0;i<moi.length;i++){
                for(j=0;j<array.length;j++){
                    if(moi[i].Kategori.toLowerCase()==array[j].toLowerCase()){
                        break;
                    }
                    if(moi[i].Kategori.toLowerCase()!==array[j].toLowerCase()&&j==array.length-1){
                        array.push(moi[i].Kategori)
                    }
                }
            }
        }
        res.send(array)
    })
})
.get("/list/:id",(req,res)=>{
 
    mo = req.params.id.split("DanDaniDanu")
    console.log(mo)
    if(mo[0]=="kategori"){
        pro.find({},(mai,moi)=>{
            if(mai)res.status(500).send(mai);
            else {
                array=[]
                yoo = mo[1].toLowerCase()
                for(i=0;i<moi.length;i++){
                    if(moi[i].Kategori.toLowerCase()==yoo){
                        array.push(moi[i])
                    }
                }
                res.json(array)
            }
        })
    }else if(mo[0]=="id"){
        pro.findById(mo[1],(mai,moi)=>{
            if(mai)res.status(500).send(mai);
            else res.json(moi);
        })
    }
})
.post("/cart",(req,res)=>{

    cart.findOne({ProductId:req.body.ProductId},(carterror,cartresult)=>{
        if(carterror)res.send(carterror);
        else {
            console.log(cartresult)
            if(cartresult==null){
                newObj = new cart({
                    ProductId:req.body.ProductId,
                    ProductName:req.body.ProductName,
                    Picture:req.body.Picture,
                    Price:req.body.Price,
                    Quantity:1,
                })
                newObj.save((error)=>{
                    if(error)res.send(error)
                    else res.json(newObj)
                        })
                    }else{
                        Obj={
                            Quantity:cartresult.Quantity+1
                        }
                        cart.findOneAndUpdate({ProductId:req.body.ProductId},Obj,(error,result)=>{
                            if(error)res.send(error);
                            else{
                                res.json(result)
                            }
                        })
                    }
            }
        }
                              
    )      
})
.get("/cart",(req,res)=>{
    cart.find({},(err,result)=>{
        if(err)res.json(err)
        else res.json(result)
    })
})
.delete("/cart",(req,res)=>{
        cart.remove({},(err,result)=>{
            if(err)res.json(err)
            else res.json(result)
        })
})


module.exports = (function(){
    return roo;
})();