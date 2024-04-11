const zod = require("zod");

const addBook=zod.object({
    title:zod.string(),
    descriptition:zod.string(),
})

const updateBook=zod.object({
    id:zod.string(),
})

module.exports={
    addBook:addBook,
    updateBook:updateBook,
}