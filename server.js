require("dotenv").config()
var express=require("express");
var cors=require("cors");

var bookRouter = require("./routes/book-routes");
var productRouter=require("./routes/product-routes")
const connectToDatabase = require("./database/db");

var app=express();


//connect to the dataBase

connectToDatabase()
//add the Middle ware


app.use(express.json())
app.use(cors())

app.use("/api/books",bookRouter)
app.use("/api/products",productRouter)

var PORT=process.env.PORT || 4040


app.listen(PORT,()=>{
    console.log("The surver is Running")
})



