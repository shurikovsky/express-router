const express = require('express');
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

class  authorization {
    constructor(login = "", password = "", id = uuid()) {
        this.id = id,
        this.login = login,
        this.password = password
    }
}

const stor = {
    books: [
        new Book(),
        new Book(),
    ]
}

const usersAuthorized = {
    users: [
        new authorization("gastly", "1234")
    ]
}

const app = express();
app.use(express.json());

app.get('/api/book', (req, res) => {
    const {books} = stor;
    res.json(books);
})

app.get('/api/book/:id', (req, res) => {
    const {books} = stor;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);

    if( idx !== -1) {
        res.json(books[idx]);
    } else {
        res.status(404);
        res.json('404 | страница не найдена');
    }

})

app.post('/api/book/', (req, res) => {
    const {books} = stor;
    const {title, description,  authors, favorite,
        fileCover, fileName} = req.body;

    const newBook = new Book(title, description,  authors, favorite,
        fileCover, fileName);
    books.push(newBook);

    res.status(201);
    res.json(newBook);
})

app.post('/api/user/login', (req, res) => {
    const {users} = usersAuthorized;
    const {login, password} = req.body;

    const newUsed = new authorization(login, password);
    users.push(newUsed);
    res.status(201);
    res.json({id: 1, 
              mail: "test@mail.ru"
    });
})

app.put('/api/book/:id', (req, res) => {
    const {books} = stor;
    const {title, description,  authors, favorite,
        fileCover, fileName} = req.body;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);

    if (idx !== -1){
        books[idx] = {
            ...books[idx],
            title, 
            description,  
            authors, 
            favorite,
            fileCover, 
            fileName
        }

        res.json(books[idx]);
    } else {
        res.status(404);
        res.json('404 | страница не найдена');
    }
})

app.delete('/api/book/:id', (req, res) => {
    const {books} = stor;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);
     
    if(idx !== -1){
        books.splice(idx, 1);
        res.json("ok");
    } else {
        res.status(404);
        res.json('404 | страница не найдена');
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT)