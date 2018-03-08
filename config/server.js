const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

//middleware's

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function(){
    console.log(`BACKEMD is running on port ${port}.`)
})

module.exports = server

/*
server.use(function(req, res, next){
   console.log('meu middleware 1')
   next()
})

server.use(function(req, res, next){
    console.log('meu middleware 2')
    res.send('Funcionou novamente!!!')
})*/