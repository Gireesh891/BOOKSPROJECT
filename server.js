require("dotenv").config()
var express=require("express");
var cors=require("cors");

var router = require("./routes/book-routes");
const connectToDatabase = require("./database/db");

var app=express();


//connect to the dataBase

connectToDatabase()
//add the Middle ware


app.use(express.json())
app.use(cors())

app.use("/api/books",router)

var PORT=process.env.PORT || 4040


app.listen(PORT,()=>{
    console.log("The surver is Running")
})



