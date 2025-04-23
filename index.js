const express = require('express');

const postGetRouter = require('./routes/post-get-book')
const bookIdRouter = require('./routes/book-id')
const loginRouter = require('./routes/login')

const app = express();

app.use('/api/user/login', loginRouter)
app.use('/api/book', postGetRouter)
app.use('/api/book/:id', bookIdRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT);