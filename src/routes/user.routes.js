const Router = require('express')
const auth = require('../handlers/authHandler')

const user = Router()

user.post('/login', [auth.login])
user.post('/register', [auth.register])
user.post('/logout', [auth.logout])
user.get('/profile', [auth.profile])
user.get('/verify', [auth.verifyToken])



module.exports = user

