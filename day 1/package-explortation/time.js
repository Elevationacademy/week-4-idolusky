const moment = require('moment')

let timeNow = new Date()
console.log(timeNow)
let formattedTimeNow = moment().format("MMMM Do, YYYY")
console.log(formattedTimeNow) //January 3rd, 2017


const urllib = require('urllib')

urllib.request('http://data.nba.net/10s/prod/v1/2016/players.json', function (err, response) {
    console.log(response.toString())
    const stringy = response.toString()
    const parsey = JSON.parse(stringy)
    console.log(parsey.league.standard[0])
})

// urllib.request("http://www.omdbapi.com/?apikey=8004d467&t=lion+king", function (err, response) {
//     console.log(JSON.parse(response).Released)
// })