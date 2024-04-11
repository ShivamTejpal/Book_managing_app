const mongoose = require("mongoose")
//add your own mongo link
//dont copy-->
mongoose.connect("mongodb+srv://admin:i3YmQ26nkgs4RHVK@cluster0.2uftouk.mongodb.net/book_app")
//<--dont use the above code its just for refference

const book_appSchema= mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean

})

const book_app = mongoose.model('book',book_appSchema)
module.exports={
    book_app
}
