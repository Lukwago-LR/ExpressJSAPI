import express from 'express';
import cors from 'cors';

import longestWord from './bootcamp/longestWord.js';
import shortestWord from './bootcamp/shortestWord.js';
import wordLengths from './bootcamp/wordLengths.js';
import totalPhoneBill from './bootcamp/totalPhoneBill.js';
import enoughairtime from './bootcamp/enoughAirtime.js';
import transportFee from './bootcamp/transportFee.js';
import greet from './bootcamp/greet.js'


const app = express()

app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

//referencing cors
app.use(cors());

// route definitions below here
app.get("/api/word_game", function (req, res) {
    const sentence = req.query.sentence;

    if (!sentence) {
        res.json({
            error: "sentence not found!"
        })
    }

    res.json(
        {
            "longestWord": longestWord(sentence),
            "shortestWord": shortestWord(sentence),
            "length": wordLengths(sentence)
        }
    );
});

app.get("/api/totalphonebill", function (req, res) {
    const sentence = req.query.sentence
    if (!sentence) {
        res.json({
            error: "sentence not found!"
        })
    }

    res.json(
        {
            "totalphonebill": totalPhoneBill(sentence)
        }
    );
});

app.get("/api/enoughairtime", function (req, res) {
    const sentence = req.query.sentence
    const amount = req.query.amount
    if (!sentence || !amount) {
        res.json({
            error: "sentence or amount not found!"
        })
    }

    res.json(
        {
            "enoughairtime": enoughairtime(sentence, amount)
        }
    );
});

app.get("/api/transportFee", function (req, res) {
    const day= req.query.day
    if (!day) {
        res.json({
            error: "day not found!"
        })
    }

    res.json(
        {
            "transport": transportFee(day)
        }
    );
});

app.get("/api/greet", function (req, res) {
    const name = req.query.name

    if (!name) {
        res.json({
            error: "name not found!"
        })
    }

    res.json(
        {
            "greet": greet(name)
        }
    );
});

let PORT = process.env.PORT || 3011;

app.listen(PORT, function () {
    console.log('App starting on port', PORT)
})