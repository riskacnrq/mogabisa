global.nomerOwner ="6289508391733"
global.nomerOwner2 = "6289508391733"
global.nomerOwner3 = "+62 895-0839-1733"
global.ownerName = "irfan"
global.botName = "SelfBot"
global.sessionName ="session" 
global.runWith = "Termuk"
global.setmenu ="location"
global.docType = "docx"
global.Qoted = "mek"
global.baileysMd = true
global.multi = true
global.nopref = false
global.allpref = false
global.prefa = "."
global.fake = botName
global.publik = true
global.Console = false
global.copyright = "© immortal" 
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="immortal"
global.packName = "immortal"
global.authorName = "Crew"
global.setwelcome = "type1"
global.autoblockcmd = false
global.autoReport = false
global.autoLevel = false
global.autoSticker = false
global.autovn = false
global.chatBot = false
global.autorespon = false
global.gamewaktu = 60
global.waktu = 60000,
global.monayawal = 1000,
global.limitAwal = 15,
global.rpg = {
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}





const fs = require("fs");
const { color } = require("../STORAGE/ACC/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






