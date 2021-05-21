const fs = require('fs');
const { resolve } = require('path');
const request = require('request');

request
  .get('https://r3---sn-bg0ezn7z.googlevideo.com/videoplayback?expire=1621587940&ei=hCOnYKDHC7ro1sQPy6qX0AU&ip=179.48.185.8&id=o-AAWp8swjhl26bkC4svNqthh8wgiSY5WBxdKLjAiSI44z&itag=250&source=youtube&requiressl=yes&vprv=1&mime=audio%2Fwebm&ns=rL21k_WPLlQkmEGt_7IBUJAF&gir=yes&clen=6635360&dur=828.041&lmt=1620798063264585&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5511222&n=6CWLEKDdcKr24nzH&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANgSJAkc8TUDOh0uHZhcePoG2d7kjF1RFWtIVlkPjDRaAiEA65Y2kiDoc7RDQKFWk9BoQy-eSgisECN5-RF7lPhyb8g%3D&redirect_counter=1&cm2rm=sn-fpmoxu-bg0e7e&req_id=543e6d43ec79a3ee&cms_redirect=yes&mh=Yt&mm=29&mn=sn-bg0ezn7z&ms=rdu&mt=1621566282&mv=m&mvi=3&pl=24&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgMpB83QOyOuAZiOkKhnnaMyVazj8vUmwBy4bebdXMvhUCIGFPcskpo-G0A-SA9o2El11sL44w_55Tzgn0dvgHnT42')
  .on('error', function(err) {
    console.error(err)
  })
  .pipe(fs.createWriteStream('audio.webm'))

