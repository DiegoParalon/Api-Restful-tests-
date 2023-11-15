const mongoose = require('mongoose')

function connect() {
 
    mongoose.connect('mongodb://localhost:27017/api-restfull')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('Conected do database')
    })
    db.on('error', console.error.bind(console, 'connection error'))
}

module.exports = {
    connect
}