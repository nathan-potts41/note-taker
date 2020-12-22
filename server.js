const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const { notes } = require('./data/notes');

// app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.json(notes)
});

app.listen(port, () => {
    console.log(`Now listening at http://localhost:${port}`)
});

