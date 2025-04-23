const { v4: uuid } = require('uuid');

class Book {
    constructor(title = "", description = "",  authors = "", favorite = "",
        fileCover = "", fileName = "", id = uuid()) {
        this.id = id,
        this.title = title,
        this.description = description,
        this.authors = authors,
        this.favorite = favorite,
        this.fileCover = fileCover,
        this.fileName = fileName
    }
}

const stor = {
    books: [
        new Book(),
        new Book(),
    ]
}

module.exports = {Book, stor}