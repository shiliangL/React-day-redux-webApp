const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
app.listen(8090, function () {
    console.log('Node app start at port 8090')
})



