import mongoose from "mongoose";

const pizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    varients:[],
    prices:[],
    category:{
        type:String,
        required:true
    },
    image: {
        type: String,
        required:true
    }
},{timestamps:true});


const pizzaModel = mongoose.model('pizza', pizzaSchema);
export default pizzaModel;

