const http = require('http');
const { getProducts, getProduct } = require('./controllers/productController')



const server = http.createServer((req, res) => {
    if(req.url === '/api/products' && req.method === 'GET'){
        getProducts(req, res);
    }else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method == 'GET'){
        const id = req.url.split('/')[3];
        getProduct(req, res, id);
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({"message": "Route not found"}));
    }

});



const PORT = process.env.PORT || 5000;
const HOST = '127.0.0.1';

server.listen(PORT, HOST, () => {
    console.log(`Server running on ${HOST}:${PORT}`);
});