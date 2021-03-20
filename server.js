const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;
const { notes, nextId } = require('./data/db.json');
const path = require('path');
const { noteCreation } = require('./lib/note');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/api/notes', (req, res) => {
    res.json(notes)
});

app.post('/api/notes', (req, res) => {
    req.body.id = nextId
    if (!req.body) {
        res
            .status(400)
            .send('Please make sure you enter a title and text for your note.');
    } else {
        const note = noteCreation(req.body, notes);
        res.json(req.body);
        console.log(req.body)
    }
});

app.post('/db', (req, res) => {
    req.body.id = nextId

    const note = noteCreation(req.body, notes)
    res.json(req.body);
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

app.listen(PORT, () => {
    console.log(`Now listening at http://localhost:${PORT}`)
});

