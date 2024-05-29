import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Product from './models/Product.js';
import dotenv from 'dotenv'
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const port = 3000

let URL = process.env.MONGO_DB_URL;
await mongoose.connect(URL);


//get All Products
app.get('/', async (req, res) => {
    let allProducts = await Product.find({}).sort({ price: 1 })
    res.json(allProducts);
})









//get Single Product Detail using ID
app.get('/product/:id', async (req, res) => {
    let { id } = req.params;
    // console.log(id);
    await Product.findById({ _id: id })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        })
})





app.listen(port, () => console.log(`Example app listening on port ${port}!`))