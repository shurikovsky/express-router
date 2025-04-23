const express = require('express')
const router = express.Router()

const {Authorization, usersAuthorized} = require('../authorization')

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

module.exports = router