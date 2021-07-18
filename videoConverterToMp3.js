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

function convert2 (input, output) {
    return new Promise ((resolve, reject) => {
        try {
            ffmpeg(input)
            .output(output)
            .on('end', () => console.log('conversão finalizada para ' + input))
            .run()
            resolve('Conversão bem sucedida.')
        } catch (error) {
            reject('Conversão mal sucedida: ' + error)
        }
    })
}

async function doConversion (input, output) {
    await convert2(input, output)
}

module.exports = {
    convert: convert,
    convert2: convert2,
    doConversion: doConversion

}