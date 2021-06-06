const fs = require('fs')
const dir = 'C:/Users/Mateus/OneDrive/Área de Trabalho/Flashback2'
const convert = require('./videoConverterToMp3.js')
const sleep = require('./sleep.js')

fs.readdir(dir, (err, paths) => {
    if (!err){
        for (i in paths) {
            convert(`${dir}/${paths[i]}`, `./converted/${paths[i]}.mp3`, err => console.log(`Falha ao tentar converter ${paths[i]}para .mp3`))
        }      

    } else
        console.log(err)
})

