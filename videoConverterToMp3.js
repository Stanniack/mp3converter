var ffmpeg = require('fluent-ffmpeg')
/* npm install --save @ffmpeg-installer/ffmpeg */
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
ffmpeg.setFfmpegPath(ffmpegPath)

function convert(input, output, callback) {
    ffmpeg(input)
        .output(output)
        .on('end', function() {                    
            console.log('conversion ended')
            callback(null)
        }).on('error', function(err){
            console.log('error: ', err)
            callback(err)
        }).run();
}

convert('./mp3.mp3', './output.mp3', function(err){
   if(!err) {
       console.log('conversion complete')
   }
});

