const express = require('express')
const app = express()
const path = require('path')


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/', function (request, response) {
    response.send("Server is up and running smoothly")
})

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/priceCheck/:name', function (request, response) {
    const name = request.params.name
    priceObj = { price: null }
    for (let i of store) {
        if (i.name === name) {
            priceObj = { price: i.price }
        }
    }
    response.send(priceObj)
})
app.get('/buy/:name', function (request, response) {
    const name = request.params.name
    for (let i of store) {
        if (i.name === name) {
            i.inventory--
            response.send(`you bought a ${i.name} for $${i.price}! there are ${i.inventory} ${i.name}s left`)
        }
    }
    response.end()
})


const port = 3002
app.listen(port, function () {
    console.log(`running on server ${port}`);
})