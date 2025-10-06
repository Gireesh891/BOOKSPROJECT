var products=require("../model/product")


var getAllProducts=async(req,res)=>{

   var allProducts=await products.find()
   res.status(200).json(allProducts)
}

var getSingleProduct=async(req,res)=>{
    var productId=req. params.id
    var singleProduct=await products.findById(productId)
    if(singleProduct){
        res.status(200).json(singleProduct)
    }
    else{
        res.status(401).json({message:"no data Found"})
    }

}


var addNewProduct=async(req,res)=>{
    var addProduct=req.body;
    var addnewProduct=await products.create(addProduct)
    if(addnewProduct){
        res.status(200).json(addnewProduct)
    }
    else{
        res.status(401).json({message:"Data Not FOund"})
    }

}


var updateProduct=async(req,res)=>{
    var productId=req.params.id
    var updateproductData=req.body
    var data=await products.findByIdAndUpdate(productId,updateproductData)
    if(data)
    {
        res.status(200).json(data)
    }
    else{
        res.status(401).json({message:"no data found"})
    }
    

}

var deleteProduct=async(req,res)=>{
    var deleteId=req.params.id
    
    var deleteProductsData=await products.findByIdAndDelete(deleteId)
    if(deleteProductsData){
        res.status(200).json(deleteProductsData)
    }
    else{
        res.status(401).json({message:"No data Found"})
    }

}



module.exports={
    addNewProduct,getAllProducts,getSingleProduct,updateProduct,deleteProduct
}

