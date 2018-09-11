// Skriv ett interaktivt program där användaren både kan
// läsa innehållet från en fil och skriva en sträng,
// som ska sparas till en fil.
// Läsning och skrivning ska vara i två olika filer,
// som du inkluderar med require.

const getFileName = require('./modules/getfile.js');
const readMe = require('./modules/readme.js');
const writeMe = require('./modules/writeme.js');
const stdin = process.openStdin();
// const path = 'test.txt';

function myProgram() {
  getFileName.then(function(path) {
    const myPath = path;
    // expected output: "Success!"
  })
}

myProgram();

// readMe(path);
// writeMe(path);
