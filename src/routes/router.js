const Router = require('express')
const route = Router() 



route.use('/auth', require('./user.routes') )


module.exports = route;