import mongoose from "mongoose";
const ProductSchema = mongoose.Schema({
    name:{
        Type: String,
        required:true
    },
    shortdescription: String,
    description:String,
    category:{
        Type: mongoose.Schema.Types.ObjectId,
        ref: 'categorys',
        required:true
    },
    thumbnail: {
        Type:String,
        required:true
    },
    images: [{
        Type:String
    }],
    start_price: {
        Type:Number,
        required:true
    },
    start_time:{
        Type: Date,
        required:true
    },
    end_time:{
        Type: Date,
        required:true
    },
    step:{
        Type:Number,
        required:true
    }
},
{
    timestamps:true
}
)
export const Product = mongoose.model('products',ProductSchema)
const categorySchema = mongoose.Schema({
    name: {
        Type: String,
        required:true
    }
},
{
    timestamps:true
}
)
export const Cateogry = mongoose.model('categorys',categorySchema)