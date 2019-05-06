const fs = require('fs');

const chalk = require('chalk');

const addNote = function(title, body) {

    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);

    debugger;

    if(!duplicateNote) {

        notes.push({
            title : title,
            body : body
        });
    
        saveNotes(notes);
   
        console.log(chalk.green.inverse('Note Added'));

     }else {

        console.log(chalk.red.inverse('Note is duplicated'));
     }
}

const deleteNote = function(title) {

    const notes = loadNotes();

    const notMatchingNotes = notes.filter(function(note) {
        
        return note.title != title;
    });

    if(notes.length !== notMatchingNotes.length) {
    
        saveNotes(notMatchingNotes);

        console.log(chalk.green.inverse('Note has been Deleted'));

    }else{

        console.log(chalk.red.inverse('No matching note has been found'));
    }
}

const getNote = function(title) {

    const allNotes = loadNotes();

    const note = allNotes.find((note) => note.title === title);

    if(note) {

        console.log('Note has been found with title : ' + title);

        return note;

    }else {

        console.log('No note has been found with title : ' + title);

        return [];
    }
}

const saveNotes = function(notes) {

    const newNotesString = JSON.stringify(notes);

    fs.writeFileSync('notes.json', newNotesString);
}

const loadNotes = function() {

    try {

        const notesBuffer = fs.readFileSync('notes.json');

        const notesString = notesBuffer.toString();
    
        return JSON.parse(notesString);

    }catch(e) {

        return [];
    }
}

module.exports = {

    addNote : addNote,

    deleteNote : deleteNote,

    loadNotes : loadNotes,

    getNote : getNote
}