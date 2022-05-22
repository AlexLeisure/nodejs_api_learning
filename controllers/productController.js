const Product = require('../models/productModel');

/**
 *  Gets all products
 * @route  GET /api/products
 * @param {*} req 
 * @param {*} res 
 */
async function getProducts(req, res){
    try{
        const products = await Product.findall();

        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(products));
    }catch(exception){
        console.log(exception);
    }
}

/**
 * Get single product
 * @route /api/products/:id
 * @param {*} req 
 * @param {*} res 
 * @param {*} id 
 */
async function getProduct(req, res, id){
    try{
        const product = await Product.findById(id);

        if(!product){
            res.writeHead(404, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'Product not found'}));
        }else{
            res.writeHead(200, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify(product));
        }
    }catch(e){
        console.log(e);
    }
}

module.exports = {
    getProducts, getProduct
}