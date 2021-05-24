const fs = require('fs')
let requestVideo = require('./videomp3converter.js')

try {
    let array = fs.readFileSync('C:/Users/Mateus/OneDrive/Área de Trabalho/cantores.txt').toString().split('\r\n')
    //console.log(array)
    array.forEach(item => requestVideo(item))
} catch (error) {
    console.log(error)
}
