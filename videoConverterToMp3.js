var ffmpeg = require('fluent-ffmpeg')
/* npm install --save @ffmpeg-installer/ffmpeg */
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
ffmpeg.setFfmpegPath(ffmpegPath)

function convert(input, output, callback) {
    ffmpeg(input)
        .output(output)
        .on('end', () => console.log('conversão finalizada para ' + input))
        .on('error', err => callback(err))
        .run()
}

module.exports = {
    convert: convert,
}