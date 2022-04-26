// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//routes

//ESTO ES UN ENDPOINT
// HTTP METHODS: GET, POST, PUT, DELETE
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL request ${new Date()}`)
    const explorer1 = {id: 1, name: "Rbaume1"}
    const explorer2 = {id: 2, name: "Rbaume2"}
    const explorer3 = {id: 3, name: "Rbaume3"}
    const explorer4 = {id: 4, name: "Rbaume4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})