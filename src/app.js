const express = require('express')
const morgan = require('morgan')
const route = require('./routes/router')

const server = express()

server.use(express.json())
server.use(morgan('dev'))
server.use((req,res,next)=>{
    console.log('pasando la reques');
    next()
})

server.use('/api',  route)


module.exports = server;