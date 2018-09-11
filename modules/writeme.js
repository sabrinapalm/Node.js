const fs = require('fs');
const stdin = process.openStdin();

module.exports = function writeMyFile(path) {
  stdin.addListener('data', function (data) {
    const textContent = data.toString();
    fs.appendFile(path, textContent), () => {
      if( err ) throw err;
      console.log('textContent', textContent);
    }
  })
};
