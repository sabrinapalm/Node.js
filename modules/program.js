// Eko - skriv ett program som tar emot input från användaren och skriver ut det igen, med stora bokstäver.

const input = process.openStdin();
input.addListener('data', data => {
	console.log('HELLO ' + String(data).toUpperCase());
});

console.log('Enter your name: ')
