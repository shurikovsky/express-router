const { v4: uuid } = require('uuid')

class  Authorization {
    constructor(login = "", password = "", id = uuid()) {
        this.id = id,
        this.login = login,
        this.password = password
    }
}

const usersAuthorized = {
    users: [
        new Authorization("gastly", "1234")
    ]
}

module.exports = {Authorization, usersAuthorized}