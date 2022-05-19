//  import the requred packages
const express = require('express')

// configure he express app
const app = express()
const PORT = 3000

// define http routes
// app.httpVerb('/url', callback(req, res))
app.get('/', (req, res) => {
    // send a plain text response
    res.send('Hello, Express!')
    
})


// listen on a port
app.listen(PORT, () => {
    // very that things are working when the server starts
    console.log(`You are listening to the smooth sounds of port ${PORT} in the morning 🌊`)
})

