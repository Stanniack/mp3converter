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
.then(output => {
    let array = output['formats']
    let videoList = []
    let video

    for (item in array) {

        if (array[item]['ext'] == 'webm' && array[item]['filesize'] != null) {
            video = {
                filesize: array[item]['filesize'],
                format: array[item]['ext'],
                videoUrl: array[item]['url']
            }

            videoList.push(video)
        }

    }

    /* Ordena por tamanho filesize em ordem crescente*/
    videoList.sort((video, anotherVideo) => video.filesize < anotherVideo.filesize ? -1 : (video.filesize > anotherVideo.filesize ? 1 : 0))

    videoList.forEach(item => console.log(item))
        
}).catch(err => console.log('Erro ao fazer a requisição do vídeo: ' + err))
