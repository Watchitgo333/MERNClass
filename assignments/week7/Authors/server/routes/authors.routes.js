const AuthorsController = require('../controllers/authors.controllers');

module.exports = (app) => {
    app.get("/api/authors", AuthorsController.getAuthors);
    app.put("/api/authors/:id", AuthorsController.updateAuthorById);
    app.get("/api/authors/:id", AuthorsController.getAuthorById);
    app.post("/api/authors", AuthorsController.createAuthor);
    app.delete("/api/authors/:id", AuthorsController.deleteAuthorById);
}