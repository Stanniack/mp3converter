const fs = require('fs')
const dir = './download'
const {convert, convert2, doConversion} = require('./videoConverterToMp3.js')
const sleep = require('./sleep.js')

fs.readdir(dir, (err, paths) => {
    if (!err){
        for (i in paths) {
            convert(`${dir}/${paths[i]}`, `./converted/${paths[i]}.mp3`, err => console.log(`Falha ao tentar converter ${paths[i]} para .mp3: ` + err))
        }      

    } else
        console.log(err)
})
