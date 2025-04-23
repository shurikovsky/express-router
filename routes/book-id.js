const express = require('express')
const router = express.Router()

const {Book, stor} = require('../books')

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

module.exports = router

