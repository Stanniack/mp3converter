const ytdl = require('youtube-dl-exec')

ytdl('https://youtube.com/watch?v=0aX3Bjzdq0Y', {
    dumpSingleJson: true,
    noWarnings: true,
    noCallHome: true,
    noCheckCertificate: true,
    preferFreeFormats: true,
    youtubeSkipDashManifest: true,
    referer: 'https://youtube.com/watch?v=0aX3Bjzdq0Y'
})
.then(function (output) {
    let array = output['formats']

    for (item in array) {
        console.log('__')
        //console.log(`${array[item]['filesize']}`)
        console.log(array[item])
    }
        
        

}).catch(err => console.log('Erro ao fazer a requisição do vídeo: ' + err))