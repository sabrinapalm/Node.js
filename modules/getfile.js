const stdin = process.openStdin();

const getFileName = new Promise(function(resolve, reject) {
  console.log('Enter filename:');
  stdin.addListener('data', function(data) {
    const path = data.toString().trim();
      console.log('Filename: ' + path);
      resolve(path);
  })
});

module.exports = getFileName;
