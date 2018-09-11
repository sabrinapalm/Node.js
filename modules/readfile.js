// Skriv ett interaktivt program som frågar användaren efter en fil, vars innehåll ska skrivas ut.
const fs = require('fs');
const input = process.openStdin();

askUserForFile();

function askUserForFile() {
  console.log('Choose a file: ')
  input.addListener('data', data => {
    const readFile = data.toString().trim();
    readChosenFile(readFile);
  });
}

function readChosenFile(readFile) {
  fs.readFile(readFile, (err, data) => {
    if( err ) throw err;
    console.log('result is:\n' + data.toString());
  });
}
