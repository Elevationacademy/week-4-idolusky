const express = require('express')
const router = express.Router()




router.get('/sanity', function (req, res) {
    res.send("server up and running")
})

const wordCounter = {}
router.get('/word/:word', function (req, res) {
    if (wordCounter[req.params.word]) {
        res.send({ count: wordCounter[req.params.word] })
    } else {
        res.send({ count: 0 })
    }
})

router.post('/word/:word', function (req, res) {
    if (wordCounter[req.params.word]) {
        wordCounter[req.params.word]++
    } else {
        wordCounter[req.params.word] = 1
    }
    res.send({ text: `added ${req.params.word}`, currentCount: wordCounter[req.params.word] })
})

router.post('/words/:sentence', function (req, res) {
    let words = req.params.sentence.split(" ")
    let numNewWords = 0
    letnumOldWords = 0
    for (let word of words) {
        if (wordCounter[word]) {
            wordCounter[word]++
            numOldWords++
        } else {
            wordCounter[word] = 1
            numNewWords++
        }
    }
    res.send({ text: `added ${numNewWords} words, ${numOldWords} already existed`, currentCount: -1 })
})