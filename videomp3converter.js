const request = require('request')
const ytdl = require('youtube-dl-exec')
const fs = require('fs')

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
    
            if (array[item]['ext'] == 'webm' && array[item]['filesize'] != null && array[item]['format'].includes('audio only')) {
                video = {
                    title: output['title'],
                    filesize: array[item]['filesize'],
                    ext: array[item]['ext'],
                    format: array[item]['format'],
                    videoUrl: array[item]['url']
                }
    
                videoList.push(video)
            }
    
        }
    
        /* Ordena por tamanho filesize em ordem crescente*/
        videoList.sort((video, anotherVideo) => video.filesize < anotherVideo.filesize ? -1 : (video.filesize > anotherVideo.filesize ? 1 : 0))

        return videoList
                 
    })
    .then(videoList => {
        /* Elimina todos os caracteres não permitidos como nome de arquivo no Windows */
        let mp3file = videoList[0]['title'].replace(/[/\<>?|""*&]/g, '')
        request(videoList[0]['videoUrl']).pipe(fs.createWriteStream(`./download/${mp3file}.mp3`))
        console.log(`Fazendo o download do vídeo '${videoList[0]['title']}'`)
    })
    .catch(err => console.log(`Erro ao fazer a requisição do vídeo para a url: '${url}'`))

}

module.exports = requestVideo