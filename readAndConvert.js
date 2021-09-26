const fs = require('fs')
const dir = './download'
const { convert, convert2} = require('./videoConverterToMp3.js')

function convertToMP3() {
    fs.readdir(dir, (err, paths) => {
        if (!err) {
            for (i in paths) {
                convert2(`${dir}/${paths[i]}`, `./converted/${paths[i]}.mp3`, err => console.log(`Falha ao tentar converter ${paths[i]} para .mp3: ` + err))
            }

        } else
            console.log(err)
    })

}

convertToMP3();


