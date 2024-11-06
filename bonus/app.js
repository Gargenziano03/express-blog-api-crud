//import express
const express = require('express')
const app = express()

//imposrt the games.js file
const games = require('/db/games.js')

//create our express server instance
app.listen(3000, () => {
    console.log("server started on port 3000");
});

//import the menu.js file (index)
app.get('/games', (req, res) => {
    res.json({data: games, count: games.lengt })
});