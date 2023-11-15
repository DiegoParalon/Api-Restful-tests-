const express = require('express')
const cors = require('cors')


const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

db.connect()

const allowedOrigins = [
    'http://127.0.0.1:5501',
    'www.teste.pt',
]

//habilita cors 
app.use(cors({
    origin: function(origin, callback) {

        let allowed = true

        if (!origin) allowed = true 

        if (!allowedOrigins.includes(origin)) allowed = false 

        callback(null, allowed)
    }
}))


app.use(express.json())

app.use('/api', routes)

// executando o servidor 

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listen on Port ${port}`))