const ytdl = require('youtube-dl-exec')

function requestVideo (url) {
    let videoList = []

    ytdl(url, {
        dumpSingleJson: true,
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
        preferFreeFormats: true,
        youtubeSkipDashManifest: true,
        referer: url
    })
    .then(output => {
        let array = output['formats']
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

        //videoList.forEach(item => console.log(item))

                 
    }).catch(err => console.log('Erro ao fazer a requisição do vídeo: ' + err))

    return videoList

}

let videoList = requestVideo('https://www.youtube.com/watch?v=Rb33hto3d7g')

