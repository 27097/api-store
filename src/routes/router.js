const Router = require('express')
const route = Router() 



route.use('/user', require('./user.routes') )


module.exports = route;