var Books=require("../model/books")

var getAllBooks=async(req,res)=>{
    var allBooks=await Books.find()
    res.status(200).json(allBooks)
}


var getSingleBook=async(req,res)=>{
    var BookId=req.params.id
    var singleBook=await Books.findById(BookId)
    res.status(200).json(singleBook)

}

var addNewBook=async(req,res)=>{
    // var newFormBook=req.body
    // var newBook=await Books.create(newFormBook)
    // if(newBook){
    //     res.status(201).json(newBook)
    // }


    var newFormBook=req.body
    var newBook=await Books.create(newFormBook)
    if(newBook)
    {
        res.status(200).json(newBook)
    }
    else{
        res.status(404).json({message:"Data Not Found"})
    }
}


var updateBook=async(req,res)=>{
    var bookId=req.params.id
    var updateData=req.body
    var updateBook=await Books.findByIdAndUpdate(bookId,updateData)
    if(updateBook){
        res.status(200).json(updateBook)
    }
    else{
        res.status(404).json({message:"no data"})
    }

}

var deleteBook=async(req,res)=>{

    var bookId=req.params.id
    var deletedData=await Books.findByIdAndDelete(bookId)
    if(deletedData){
        res.status(200).json(deletedData)
    }
    else{
        res.status(404).json({message :  "No data Found" })
    }
}


module.exports={
    getAllBooks,getSingleBook,addNewBook,updateBook,deleteBook
};
