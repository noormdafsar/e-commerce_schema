import mongoose from "mongoose";
const categorySchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        price : {
            type : String,
            required : true
        },
    }, {timestamps}
)

export const Category = mongoose.model('Category',categorySchema)