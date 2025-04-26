const express = require('express')
const router = express.Router()

const {Book, stor} = require('../books')
const {Authorization, usersAuthorized} = require('../authorization')

router.get('/api/book/:id', (req, res) => {
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

router.put('/api/book/:id', (req, res) => {
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

router.delete('/api/book/:id', (req, res) => {
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

router.post('/api/user/login', (req, res) => {
    const {users} = usersAuthorized;
    const {login, password} = req.body;

    const newUsed = new Authorization(login, password);
    users.push(newUsed);
    res.status(201);
    res.json({id: 1, 
              mail: "test@mail.ru"
    });
})

router.get('/api/book', (req, res) => {
    const {books} = stor;
    res.json(books);
})

router.post('/api/book/', (req, res) => {
    const {books} = stor;
    const {title, description,  authors, favorite,
        fileCover, fileName} = req.body;

    const newBook = new Book(title, description,  authors, favorite,
        fileCover, fileName);
    books.push(newBook);

    res.status(201);
    res.json(newBook);
})

module.exports = router

