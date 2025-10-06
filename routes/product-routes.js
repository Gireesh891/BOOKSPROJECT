var express=require("express")
var{getAllProducts,getSingleProduct,addNewProduct,updateProduct,deleteProduct}=require("../controllers/product-controller")
var router=express.Router()




router.get("/get",getAllProducts)



router.get("/get/:id",getSingleProduct)



router.post("/add",addNewProduct)



router.put("/update/:id",updateProduct)


router.delete("/delete/:id",deleteProduct)



module.exports = router



