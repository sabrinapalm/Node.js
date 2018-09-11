const fs = require('fs');

const readMyFile = (myPath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(myPath, (err, data) => {
      if( reject ) throw reject;
      const result = data.toString().trim();
      resolve(result);
    });
  });
}

module.exports = readMyFile;
