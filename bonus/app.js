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

//get a single game by its ID (show)
app.get('/games/:id', (req, res) => {
    //find the game by id
    const game = games.find((game) => game.id === parseInt(req.params.id))
    if (!game) {
        return res.status(404).json({ error: "No game found with that id"})
    }
    return res.status(200).json({data: game})
});