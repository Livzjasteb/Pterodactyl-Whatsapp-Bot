const fs = require('fs')
const chalk = require('chalk')

global.domain = "https://" // Isi Domain mu, WEBSITE WAJIB ADA SSL
global.apikey = "https://api.zeeoneofc/ZaSAFxtqrPRix2L"
global.capikey = "https://api.zeeoneofc/ZaSAFxtqrPRix2L"
global.creAtor = "6283176793414@s.whatsapp.net"
global.owner = ['6283176793414']
global.ownerNumber = ["6281234824414@s.whatsapp.net"]
global.nomerOwner = "6281234824414"
global.namabotnya = 'JiBotz'
global.namaownernya = 'Zyxx'
global.packname = 'JiBotz'
global.author = 'www.zyx.com'
global.sessionName = 'session'
global.email = 'zyxsesi@gmail.com' // Ganti dengan emailmu
global.group = 'https://chat.whatsapp.com/'
global.youtube = 'https://youtube.com/'
global.website = 'https://www.cpancloud.com'
global.github = 'https://github.com/Pann09'
global.nomorowner = 'https://wa.me/6281224172387'
global.region = 'Indonesia'
global.prefa = ['','!','.','#','-','•']
global.krmd = 
{
success: '```Sukses!```',
admin: '```Fitur Khusus Admin Group!!!```',
botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
owner: '```Owner Only Broo...```',
group: '```Fitur Digunakan Hanya Untuk Group!!!```',
private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
error: '```Error Kak, Hubungi owner 6281234824414```',
wait: '```Waittt...```'
}

global.thumb = fs.readFileSync('./js/image/thumb.jpg')
global.imagekir = fs.readFileSync('./js/image/image.jpg')
global.videokir = fs.readFileSync('./js/image/video.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
