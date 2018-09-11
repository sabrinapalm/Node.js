// Skriv ett interaktivt program som frågar användaren efter ett filnamn.
// Sedan ska det fråga användaren efter en sträng, som ska sparas i en fil med det namnet.

const fs = require('fs');
const stdIn = process.openStdin();

stdIn.addListener('data', inputFile)

console.log('Choose a file: ')

const inputFile = data => {
  const file = data.toString().trim();
  stdIn.removeListener('data', inputFile);
  console.log('Type a text: ')
  stdIn.addListener('data', data => inputText(data, file));
};

const inputText = (data, file) => {
  const text = data.toString();
  saveData(file, text);
};

const saveData = (file, text) => fs.writeFile(file, text, function(err) {
  if(err) throw err;
  console.log('Saved!')
})
