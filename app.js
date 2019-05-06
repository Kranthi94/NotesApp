const notes = require('./notes.js');

const yargs = require('yargs');

yargs.command('add', 'Add a Note', (yargs) => {

    return yargs.option('title', {

        describe : 'Title for the Note',
        demandOption : true,
        type : 'string'

    }).option('body', {

        describe : 'Body for the Note',
        demandOption : true,
        type : 'string'

    });

}, (argv) => {

    notes.addNote(argv.title, argv.body);

}).command('delete', 'Delete a Note', (yargs) => {

    return yargs.option('title', {

        describe : 'Title for the Note',
        demandOption : true,
        type : 'string'

    });

},(argv) => {

    console.log('Note Deleted : ' + argv.title);

    notes.deleteNote(argv.title);

}).command('list', 'Lists all Notes', () => {

    console.log('Listing all notes');

    console.log(notes.loadNotes());

}).command('read', 'Read a Note', (yargs) => {

    return yargs.option('title', {

        describe : 'Title for the Note',
        demandOption : true,
        type : 'string'

    });

},(argv) => {

    console.log(notes.getNote(argv.title));

}).argv;

yargs.parse();