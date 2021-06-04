const fs = require('fs')
let requestVideo = require('./videoDownload.js')

try {
    let file = fs.readFileSync('C:/Users/Mateus/OneDrive/Área de Trabalho/cantores.txt').toString().split('\r\n')

    for (let i = 0; i < file.length; i++)
        requestVideo(file[i].split('&list=')[0])
    
} catch (error) {
    console.log(error)
}
