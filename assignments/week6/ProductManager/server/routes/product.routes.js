const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get("/api", ProductController.newProductForm)
    app.get("/api/products", ProductController.getProducts);
    app.put("/api/products/:id",ProductController.updateProduct);
    app.get("/api/products/:id",ProductController.getProductById);
    app.post("/api/products", ProductController.createProduct);
    app.delete("/api/products/:id",ProductController.deleteProduct);

}