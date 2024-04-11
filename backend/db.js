const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:i3YmQ26nkgs4RHVK@cluster0.2uftouk.mongodb.net/book_app")


const book_appSchema= mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean

})

const book_app = mongoose.model('book',book_appSchema)
module.exports={
    book_app
}
