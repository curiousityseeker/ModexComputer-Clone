import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name: String,
    brand: String,
    socket: String,
    Integrated_Graphics: String,
    Series: String,
    Cors: Number,
    Threads: Number,
    Cache: String,
    Max_Turbo_Frequency: String,
    Base_Clock: String,
    TDP: String,
    Warranty: String,
    Note: String,
    Price: Number
})
const Product = mongoose.model("products", productsSchema);
export default Product;