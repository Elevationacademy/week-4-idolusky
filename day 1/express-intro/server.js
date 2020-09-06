const express = require('express')

const app = express()
const path = require('path')
const { response } = require('express')
const { request } = require('http')


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}
app.get(`/books/:booksID`, function (request, response) {
    let booksID = request.params.booksID
    response.send(data[booksID])

})
// app.get('/', function (request, response) {
//     console.log("Someone has come into the server. Brace yourselves.")
//     response.send("Ending the cycle, thanks for visiting")
// })

// app.get('/maps', function (request, response) {
//     response.send("Here's some stuff related to maps")
// })

// app.get('/shoobi', function (request, response) {
//     response.send("This here is the shoobi *route*")
// })


// app.get('/life', function (request, response) {
//     response.send("42")
// })

// app.get('/landing/:username', function (request, response) {
//     response.send(`Hi there, ${request.params.username}`)
// })

// const users = {
//     tilda: "You've done a wonderful job",
//     riva: "You need to improve your form, but good perseverance",
//     jeremy: "You're incredible"
// }
// app.get('/users/:userID', function (request, response) {
//     response.send(users[request.params.userID])
// })


// app.get('/details', function (request, response) {
//     let params = request.query
//     console.log(params.city);
//     console.log(params);
//     response.send(params)
// })




const port = 3004
app.listen(port, function () {
    console.log(`running server on port ${port}`)
})
