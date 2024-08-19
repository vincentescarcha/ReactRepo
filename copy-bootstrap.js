const fs = require('fs');
const path = require('path');

// Source and destination paths
const source = path.resolve(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.min.css');
const destination = path.resolve(__dirname, 'public/bootstrap.min.css');

// Copy the file
fs.copyFile(source, destination, (err) => {
  if (err) throw err;
  console.log('Bootstrap CSS has been copied to public directory.');
});
