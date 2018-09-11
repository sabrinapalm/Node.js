// Skriv ett program som sparar valfri sträng i en textfil,
// med hjälp av modulen fs. Var hamnar filen?
// Kan man göra så att den sparas någon annanstans på datorn?

// Skriv ett program som lägger till en valfri sträng till en textfil.

const fs = require('fs');

fs.writeFile('fs.txt', 'Sabrina Palm\n', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.appendFile('fs.txt', 'Sabrina Wolf\n', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
