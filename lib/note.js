const path = require('path');
const fs = require('fs');

const noteCreation = (body, arrayNotes) => {
    const note = body

    arrayNotes.push(note);
    let nextId = parseInt(note.id) + 1;
    fs.writeFileSync(path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes: arrayNotes, nextId }, null, 2));

    return note;
};

module.exports = { noteCreation }