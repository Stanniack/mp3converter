const fs = require('fs');
const { resolve } = require('path');
const request = require('request');

request
  .get('')
  .on('error', function(err) {
    console.error(err)
  })
  .pipe(fs.createWriteStream('audio.mp3'))

