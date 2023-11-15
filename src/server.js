const express = require('express')
//const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

db.connect()

app.use(express.json())

app.use('/api', routes)

// executando o servidor 

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listen on Port ${port}`))