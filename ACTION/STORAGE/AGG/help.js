const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const { color, bgcolor } = require('../ACC/color')
const {weton,week,calender,dateIslamic} = require('../ACC/functions')
const {kyun} = require("../ACC/myfunc");
moment.tz.setDefault("Asia/Jakarta").locale("id");

//Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./ACTION/STORAGE/AGG/msg.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)



let yes = "*「 _Error_ 」* ❌"
let no = ""

const feat = (q) => {
    let status = false
    Object.keys(JSON.parse(fs.readFileSync('./ACTION/STORAGE/ADD/listerror.json'))).forEach((i) => {
        if (JSON.parse(fs.readFileSync('./ACTION/STORAGE/ADD/listerror.json'))[i].cmd === q) {
            status = true
        }
    })
    return status
}



exports.allmenu =  (senderNumber, user, thisHit, publik, sender, prefix, isOwner, pushname) => {
return ` ╭─⭓「 ${botName} - MD Beta 」
 │• Nama : ${pushname} 
 │• Status : ${isOwner ? 'Owner':'User'}
 │• Prefix : 「 ${prefix} 」
 │• Library : *Baileys-MD*.
 │• Mode : ${publik ? "Public" : "Self"}
 │• Total Feature : ${totalFitur()}
 │• Total Error : ${JSON.parse(fs.readFileSync('./ACTION/STORAGE/ADD/listerror.json')).length}
 │• Total User : ${JSON.parse(fs.readFileSync('./ACTION/STORAGE/ADD/user.json')).length.toLocaleString()}
 │• User Banned : ${JSON.parse(fs.readFileSync('./ACTION/STORAGE/ADD/banned.json')).length}
 │• User Blocked : ${JSON.parse(fs.readFileSync('./ACTION/STORAGE/ADD/userblocked.json')).length.toLocaleString()}
 │• Cmd Blocked : ${JSON.parse(fs.readFileSync('./ACTION/STORAGE/ADD/blockcmd.json')).length} 
 ├───⭓「 Waktu 」
 │ ⫹⫺ Runtime : ${kyun(process.uptime())}
 │ ⫹⫺ Time : ${timeWib} WIB 
 │ ⫹⫺ Time : ${timeWit} WIT 
 │ ⫹⫺ Time : ${timeWita} WITA
 │ ⫹⫺ Day : ${week}, ${calender}
 │ ⫹⫺ Islamic : ${dateIslamic}
 │ ⫹⫺ Hit Today : ${thisHit.toLocaleString()} 
 ╰──────⭓`
 }

exports.fitur = (prefix) => {
return`  ┌──⭓「 *OWNER MENU* 」
  │
  │⭔ ${prefix}join✓ ${feat("join")? yes :no}
  │⭔ ${prefix}bc✓ ${feat("bc")? yes :no}
  │⭔ ${prefix}bcgc✓ ${feat("bcgc")? yes :no}   
  │⭔ ${prefix}getcaze✓ ${feat("getcaze")? yes :no}
  │⭔ ${prefix}getsesi✓ ${feat("getsesi")? yes :no} 
  │⭔ ${prefix}leave✓ ${feat("leave")? yes :no} 
  │⭔ ${prefix}block✓ ${feat("block")? yes :no}
  │⭔ ${prefix}unblock✓ ${feat("unblock")? yes :no}
  │⭔ ${prefix}blockcmd✓ ${feat("blockcmd")? yes :no}   
  │⭔ ${prefix}unblockcmd✓ ${feat("unblockcmd")? yes :no} 
  │⭔ ${prefix}autolevel✓ ${feat("autolevel")? yes :no} 
  │⭔ ${prefix}autorespon✓ ${feat("autorespon")? yes :no} 
  │⭔ ${prefix}autosticker✓ ${feat("autosticker")? yes :no}   
  │⭔ ${prefix}autovn✓ ${feat("autovn")? yes :no}               
  │⭔ ${prefix}addlimit✓ ${feat("addlimit")? yes :no}
  │⭔ ${prefix}culik✓ ${feat("culik")? yes :no}
  │⭔ ${prefix}shutdown✓ ${feat("shutdown")? yes :no}
  │⭔ ${prefix}restart✓ ${feat("restart")? yes :no}
  │⭔ ${prefix}setprefix✓ ${feat("setprefix")? yes :no}
  │⭔ ${prefix}setmenu✓ ${feat("setmenu")? yes :no}
  │⭔ ${prefix}setquoted✓ ${feat("setquoted")? yes :no}
  │⭔ ${prefix}setwelcome✓ ${feat("setwelcome")? yes :no}
  │⭔ ${prefix}setnamebot✓ ${feat("setnamebot")? yes :no}
  │⭔ ${prefix}setppbot✓ ${feat("setppbot")? yes :no}
  │⭔ ${prefix}setbio✓ ${feat("setbio")? yes :no}
  │⭔ ${prefix}setgif✓ ${feat("setgif")? yes :no}
  │⭔ ${prefix}setexif✓ ${feat("setexif")? yes :no}
  │⭔ ${prefix}console✓ ${feat("console")? yes :no}
  │⭔ ${prefix}public✓ ${feat("public")? yes :no}
  │⭔ ${prefix}self✓ ${feat("self")? yes :no}
  │
  └────────────⭓
   
  ┌──⭓「  *GROUP MENU* 」
  │
  │⭔ ${prefix}antilink✓ ${feat("antilink")? yes :no}
  │⭔ ${prefix}antilinkgc✓ ${feat("antilinkgc")? yes :no}
  │⭔ ${prefix}antiasing✓ ${feat("antiasing")? yes :no}
  │⭔ ${prefix}infogc✓ ${feat("infogx")? yes :no}
  │⭔ ${prefix}linkgc✓ ${feat("linkgc")? yes :no}
  │⭔ ${prefix}setppgc✓ ${feat("setppgc")? yes :no}
  │⭔ ${prefix}setnamegc✓ ${feat("setnamegc")? yes :no}
  │⭔ ${prefix}setdesc✓ ${feat("setdesc")? yes :no}
  │⭔ ${prefix}gc ${feat("gc")? yes :no}
  │⭔ ${prefix}revoke✓ ${feat("revoke")? yes :no}
  │⭔ ${prefix}hidetag✓ ${feat("hidetag")? yes :no}
  │⭔ ${prefix}tagall✓ ${feat("tagall")? yes :no}
  │⭔ ${prefix}kick✓ ${feat("kick")? yes :no}
  │⭔ ${prefix}add✓ ${feat("add")? yes :no}
  │⭔ ${prefix}opentime✓ ${feat("opentime")? yes :no}
  │⭔ ${prefix}closetime✓ ${feat("closetime")? yes :no}
  │⭔ ${prefix}demote✓ ${feat("demote")? yes :no}
  │⭔ ${prefix}promote✓ ${feat("promote")? yes :no}
  │⭔ ${prefix}kickme✓ ${feat("kickme")? yes :no}
  │⭔ ${prefix}banchat✓ ${feat("banchat")? yes :no}
  │⭔ ${prefix}unbanchat✓ ${feat("unbanchat")? yes :no}
  │⭔ ${prefix}ban✓ ${feat("ban")? yes :no}
  │⭔ ${prefix}unban✓ ${feat("unban")? yes :no}  
  │⭔ ${prefix}getppgc✓ ${feat("getppgc")? yes :no}
  │⭔ ${prefix}getpp✓ ${feat("getpp")? yes :no}
  │⭔ ${prefix}listonline✓ ${feat("lostoneline")? yes :no}
  │⭔ ${prefix}getname✓ ${feat("getname")? yes :no}
  │
  └────────────⭓

  ┌──⭓「 *MAIN MENU* 」
  │
  │⭔ ${prefix}menu✓ ${feat("menu")? yes :no}
  │⭔ ${prefix}del✓ ${feat("del")? yes :no}
  │⭔ ${prefix}react✓ ${feat("react")? yes :no}   
  │⭔ ${prefix}info✓ ${feat("info")? yes :no}
  │⭔ ${prefix}dashboard✓ ${feat("dashboard")? yes :no}
  │⭔ ${prefix}sewa✓ ${feat("sewa")? yes :no}
  │⭔ ${prefix}status✓ ${feat("status")? yes :no}
  │⭔ ${prefix}ping✓ ${feat("ping")? yes :no}
  │⭔ ${prefix}owner✓ ${feat("owner")? yes :no}
  │⭔ ${prefix}readmore✓ ${feat("readmore")? yes :no}
  │⭔ ${prefix}infobotz✓ ${feat("infobotz")? yes :no}
  │⭔ ${prefix}runtime✓ ${feat("runtime")? yes :no}
  │⭔ ${prefix}speed✓ ${feat("speed")? yes :no}
  │⭔ ${prefix}ss✓ ${feat("ss")? yes :no}  
  │⭔ ${prefix}chat✓ ${feat("chat")? yes :no}
  │⭔ ${prefix}rules✓ ${feat("rules")? yes :no}
  │⭔ ${prefix}kalkulator✓ ${feat("kalkulator")? yes :no}  
  │⭔ ${prefix}listpc✓ ${feat("listpc")? yes :no}
  │⭔ ${prefix}listgc✓ ${feat("listgc")? yes :no}
  │
  └────────────⭓
  
  ┌──⭓「 *FUN MENU* 」
  │
  │⭔ ${prefix}cekbapak✓ ${feat("cekbapak")? yes :no}
  │⭔ ${prefix}bucin✓ ${feat("bucin")? yes :no}
  │⭔ ${prefix}katailham✓ ${feat("katailham")? yes :no}
  │⭔ ${prefix}truth✓ ${feat("truth")? yes :no}
  │⭔ ${prefix}dare✓ ${feat("dare")? yes :no}
  │⭔ ${prefix}bisakah✓ ${feat("bisakah")? yes :no}
  │⭔ ${prefix}kapankah✓ ${feat("kapankah")? yes :no}
  │⭔ ${prefix}apakah✓ ${feat("apakah")? yes :no}
  │⭔ ${prefix}bagaimanakah✓ ${feat("bagaimanakah")? yes :no}
  │⭔ ${prefix}rate✓ ${feat("rate")? yes :no}
  │⭔ ${prefix}ceksange✓ ${feat("ceksange")? yes :no}
  │⭔ ${prefix}cekgay✓ ${feat("cekgay")? yes :no}
  │⭔ ${prefix}ceklesbi✓ ${feat("ceklesbi")? yes :no}
  │⭔ ${prefix}cekganteng✓ ${feat("cekganteng")? yes :no}
  │⭔ ${prefix}cekcantik✓ ${feat("cekcantik")? yes :no}
  │⭔ ${prefix}cekwatak✓ ${feat("cekwatak")? yes :no}
  │⭔ ${prefix}cekhobby✓ ${feat("cekhobby")? yes :no}
  │
  └────────────⭓
  
  ┌──⭓「 *RANDOM MENU* 」
  │
  │⭔ ${prefix}cecan✓ ${feat("cecan")? yes :no}
  │⭔ ${prefix}cogan✓ ${feat("cogan")? yes :no}
  │⭔ ${prefix}anime✓ ${feat("anime")? yes :no}
  │⭔ ${prefix}loli✓ ${feat("loli")? yes :no}
  │⭔ ${prefix}milf✓ ${feat("milf")? yes :no}
  │⭔ ${prefix}husbu✓ ${feat("hubu")? yes :no}
  │⭔ ${prefix}cosplay✓ ${feat("cosplay")? yes :no}
  │⭔ ${prefix}wallml✓ ${feat("wallml")? yes :no}
  │⭔ ${prefix}wallpapers✓ ${feat("wallpapers")? yes :no}
  │⭔ ${prefix}wallpapermobile✓ ${feat("wallpapermobile")? yes :no}
  │
  └────────────⭓
  
  ┌──⭓「 *CONVERTER* 」
  │
  │⭔ ${prefix}toimg✓ ${feat("toimg")? yes :no}
  │⭔ ${prefix}tomp3✓ ${feat("tomp3")? yes :no}
  │⭔ ${prefix}tomp4✓ ${feat("tomp4")? yes :no}
  │⭔ ${prefix}toptt✓ ${feat("toptt")? yes :no}
  │⭔ ${prefix}togif✓ ${feat("togif")? yes :no}
  │⭔ ${prefix}volume✓ ${feat("volume")? yes :no}
  │⭔ ${prefix}hode✓ ${feat("hode")? yes :no}
  │⭔ ${prefix}ghost✓ ${feat("ghost")? yes :no}
  │⭔ ${prefix}nightcore✓ ${feat("nightcore")? yes :no}
  │⭔ ${prefix}tupai✓ ${feat("tupai")? yes :no}
  │⭔ ${prefix}imut✓ ${feat("imut")? yes :no}
  │
  └────────────⭓

  ┌──⭓「 *EMOJI* 」
  │
  │⭔ ${prefix}emojiap✓ ${feat("emojiap")? yes :no}
  │⭔ ${prefix}emojigo✓ ${feat("emojigo")? yes :no}
  │⭔ ${prefix}emojisa✓ ${feat("emojisa")? yes :no}
  │⭔ ${prefix}emojims✓ ${feat("emojims")? yes :no}
  │⭔ ${prefix}emojiwa✓ ${feat("emojiwa")? yes :no}
  │⭔ ${prefix}emojitw✓ ${feat("emojitw")? yes :no}
  │⭔ ${prefix}emojifb✓ ${feat("emojifb")? yes :no}
  │⭔ ${prefix}emojijp✓ ${feat("emojijp")? yes :no}
  │⭔ ${prefix}emojiom✓ ${feat("emojiom")? yes :no}
  │⭔ ${prefix}emojied✓ ${feat("emojied")? yes :no}
  │⭔ ${prefix}emojimes✓ ${feat("emojimes")? yes :no}
  │⭔ ${prefix}emojilt✓ ${feat("emojilt")? yes :no}
  │⭔ ${prefix}emojimo✓ ${feat("emojimo")? yes :no}
  │⭔ ${prefix}emojimix✓ ${feat("emojimix")? yes :no}
  │
  └────────────⭓
  
  ┌──⭓「 *STICKER* 」
  │
  │⭔ ${prefix}sticker✓ ${feat("s")? yes :no}
  │⭔ ${prefix}attp✓ ${feat("attp")? yes :no}
  │⭔ ${prefix}smeme✓ ${feat("smeme")? yes :no}
  │⭔ ${prefix}triggered✓ ${feat("triggered")? yes :no}
  │⭔ ${prefix}wasted✓ ${feat("wasted")? yes :no}
  │⭔ ${prefix}comrade✓ ${feat("comrade")? yes :no}
  │⭔ ${prefix}horny✓ ${feat("horny")? yes :no}
  │⭔ ${prefix}blur✓ ${feat("blur")? yes :no}
  │⭔ ${prefix}pixelate✓ ${feat("pixelate")? yes :no}
  │⭔ ${prefix}simpcard✓ ${feat("simpcard")? yes :no}
  │⭔ ${prefix}lolice✓ ${feat("lolice")? yes :no}
  │⭔ ${prefix}glass✓ ${feat("glass")? yes :no}
  │⭔ ${prefix}take✓ ${feat("take")? yes :no}
  │⭔ ${prefix}patrick✓ ${feat("patrick")? yes :no}
  │⭔ ${prefix}gura✓ ${feat("gura")? yes :no}
  │⭔ ${prefix}doge✓ ${feat("doge")? yes :no}
  │
  └────────────⭓

  ┌──⭓「 *DOWNLOAD* 」
  │
  │⭔ ${prefix}play✓ ${feat("play")? yes :no}
  │⭔ ${prefix}playmusic✓ ${feat("playmusic")? yes :no}
  │⭔ ${prefix}ig✓ ${feat("ig")? yes :no}
  │⭔ ${prefix}gimage✓ ${feat("gimage")? yes :no}
  │⭔ ${prefix}tiktok✓ ${feat("tiktok")? yes :no}
  │⭔ ${prefix}tiktokmusic✓ ${feat("tiktokmusik")? yes :no}
  │⭔ ${prefix}tiktoknowm✓ ${feat("tiktoknowm")? yes :no}
  │⭔ ${prefix}pinterest✓ ${feat("pinterest")? yes :no}
  │⭔ ${prefix}spotify✓ ${feat("spotify")? yes :no}
  │⭔ ${prefix}ytmp4✓ ${feat("ytmp4")? yes :no}
  │⭔ ${prefix}ytmp3✓ ${feat("ytmp3")? yes :no}
  │⭔ ${prefix}mediafire✓ ${feat("mediafire")? yes :no}
  │⭔ ${prefix}githubdl✓ ${feat("githubdl")? yes :no}
  │⭔ ${prefix}gitclone ✓ ${feat("gitclone")? yes :no}
  │⭔ ${prefix}igstory ${feat("igstory")? yes :no}
  │
  └────────────⭓
  
  ┌──⭓「 *SOUND MENU* 」
  │
  │⭔ ${prefix}sound1✓ ${feat("sound1")? yes :no}
  │⭔ ${prefix}sound2✓ ${feat("sound2")? yes :no}
  │⭔ ${prefix}sound3✓ ${feat("sound3")? yes :no}
  │⭔ ${prefix}sound4✓ ${feat("sound4")? yes :no}
  │⭔ ${prefix}sound5✓ ${feat("sound5")? yes :no}
  │⭔ ${prefix}sound6✓ ${feat("sound6")? yes :no}
  │⭔ ${prefix}sound7✓ ${feat("sound7")? yes :no}
  │⭔ ${prefix}sound8✓ ${feat("sound8")? yes :no}
  │⭔ ${prefix}sound9✓ ${feat("sound9")? yes :no}
  │⭔ ${prefix}sound10✓ ${feat("sound10")? yes :no}
  │⭔ ${prefix}sound11✓ ${feat("sound11")? yes :no}
  │⭔ ${prefix}sound12✓ ${feat("sound12")? yes :no}
  │⭔ ${prefix}sound13✓ ${feat("sound13")? yes :no}
  │⭔ ${prefix}sound14✓ ${feat("sound14")? yes :no}
  │⭔ ${prefix}sound15✓ ${feat("sound15")? yes :no}
  │
  └────────────⭓  
    
  ┌──⭓「 *TEXT PRO* 」
  │
  │⭔ ${prefix}blackping✓ ${feat("blackping")? yes :no}
  │⭔ ${prefix}glitch✓ ${feat("glitch")? yes :no}
  │⭔ ${prefix}glitch2✓ ${feat("glitch2")? yes :no}
  │⭔ ${prefix}glitch3✓ ${feat("glitch3")? yes :no}
  │⭔ ${prefix}lion✓ ${feat("lion")? yes :no}  
  │⭔ ${prefix}3dneon✓ ${feat("3dneon")? yes :no}
  │⭔ ${prefix}3dspace✓ ${feat("3dspace")? yes :no}
  │⭔ ${prefix}neon✓ ${feat("neon")? yes :no}
  │⭔ ${prefix}greenneon✓ ${feat("greenneon")? yes :no}
  │⭔ ${prefix}bokeh✓ ${feat("bokeh")? yes :no}
  │⭔ ${prefix}hollographic✓ ${feat("hollographic")? yes :no}
  │⭔ ${prefix}bear✓ ${feat("bear")? yes :no}
  │⭔ ${prefix}wolf✓ ${feat("wolf")? yes :no}
  │⭔ ${prefix}joker✓ ${feat("joker")? yes :no}
  │⭔ ${prefix}dropwater✓ ${feat("dropwater")? yes :no}
  │⭔ ${prefix}neonlight✓ ${feat("neonlight")? yes :no}
  │⭔ ${prefix}thewall✓ ${feat("thewall")? yes :no}
  │⭔ ${prefix}natural✓ ${feat("natural")? yes :no}
  │⭔ ${prefix}carbon✓ ${feat("carbon")? yes :no}
  │⭔ ${prefix}pencil✓ ${feat("pencil")? yes :no}
  │⭔ ${prefix}luxury✓ ${feat("luxury")? yes :no}
  │⭔ ${prefix}whitegold✓ ${feat("whitegold")? yes :no}
  │⭔ ${prefix}lightglow✓ ${feat("lightglow")? yes :no}
  │⭔ ${prefix}arcane✓ ${feat("arcane")? yes :no}
  │⭔ ${prefix}neonlight✓ ${feat("neonlight")? yes :no}
  │⭔ ${prefix}valentine✓ ${feat("valentine")? yes :no}
  │⭔ ${prefix}glowingneon✓ ${feat("glowingneon")? yes :no}
  │⭔ ${prefix}colorled✓ ${feat("colorled")? yes :no}
  │⭔ ${prefix}3dretro✓ ${feat("3dretro")? yes :no}
  │
  └────────────⭓
  
  ┌──⭓「 *IMAGE MAKER* 」
  │
  │⭔ ${prefix}wanted✓ ${feat("wanted")? yes :no}
  │⭔ ${prefix}utatoo✓ ${feat("utatoo")? yes :no}
  │⭔ ${prefix}unsharpen✓ ${feat("unsharpen")? yes :no}
  │⭔ ${prefix}thanos✓ ${feat("thanos")? yes :no}
  │⭔ ${prefix}sniper✓ ${feat("sniper")? yes :no}
  │⭔ ${prefix}sharpen✓ ${feat("sharpen")? yes :no}
  │⭔ ${prefix}sepia✓ ${feat("sepia")? yes :no}
  │⭔ ${prefix}scary✓ ${feat("scary")? yes :no}
  │⭔ ${prefix}rip✓ ${feat("rip")? yes :no}
  │⭔ ${prefix}redple✓ ${feat("redple")? yes :no}
  │⭔ ${prefix}rejected✓ ${feat("rejected")? yes :no}
  │⭔ ${prefix}posterize✓ ${feat("posterize")? yes :no}
  │⭔ ${prefix}ps4✓ ${feat("ps4")? yes :no}
  │⭔ ${prefix}pixelize✓ ${feat("pixelize")? yes :no}
  │⭔ ${prefix}missionpassed✓ ${feat("missionpassed")? yes :no}
  │⭔ ${prefix}moustache✓ ${feat("moustache")? yes :no}
  │⭔ ${prefix}lookwhatkarenhave✓ ${feat("lookwhatkarenhave")? yes :no}
  │⭔ ${prefix}jail✓ ${feat("jail")? yes :no}
  │⭔ ${prefix}invert✓ ${feat("invert")? yes :no}
  │⭔ ${prefix}greyscale✓ ${feat("greyscale")? yes :no}
  │⭔ ${prefix}glitch✓ ${feat("glitch")? yes :no}
  │⭔ ${prefix}gay✓ ${feat("gay")? yes :no}
  │⭔ ${prefix}frame✓ ${feat("frame")? yes :no}
  │⭔ ${prefix}fire✓ ${feat("fire")? yes :no}
  │⭔ ${prefix}distort✓ ${feat("distort")? yes :no}
  │⭔ ${prefix}dictator✓ ${feat("dictator")? yes :no}
  │⭔ ${prefix}deepfry✓ ${feat("deepfry")? yes :no}
  │⭔ ${prefix}ddungeon✓ ${feat("ddungeon")? yes :no}
  │⭔ ${prefix}circle✓ ${feat("circle")? yes :no}
  │⭔ ${prefix}challenger✓ ${feat("challenger")? yes :no}
  │⭔ ${prefix}burn✓ ${feat("burn")? yes :no}
  │⭔ ${prefix}brazzers✓ ${feat("beautiful")? yes :no}
  │⭔ ${prefix}beautiful✓ ${feat("beautiful")? yes :no}
  │⭔ ${prefix}approved✓ ${feat("approved")? yes :no}
  │⭔ ${prefix}3000years✓ ${feat("3000years")? yes :no}
  │
  └────────────⭓

  ┌──⭓「 *SEARCH MENU* 」
  │
  │⭔ ${prefix}scsearch✓ ${feat("scsearch")? yes :no}
  │⭔ ${prefix}ghstalk✓ ${feat("ghstalk")? yes :no}
  │⭔ ${prefix}lirik✓ ${feat("lirik")? yes :no}
  │⭔ ${prefix}grupwa✓ ${feat("grupwa")? yes :no}
  │⭔ ${prefix}yts✓ ${feat("yts")? yes :no}
  │⭔ ${prefix}whatmusic✓ ${feat("whatmusic")? yes :no}
  │⭔ ${prefix}whatanime✓ ${feat("whatanime")? yes :no}
  │⭔ ${prefix}google✓ ${feat("google")? yes :no}
  │⭔ ${prefix}kbbi✓ ${feat("kbbi")? yes :no}
  │⭔ ${prefix}weather✓ ${feat("weather")? yes :no}
  │⭔ ${prefix}kodepos✓ ${feat("kodepos")? yes :no}
  │⭔ ${prefix}kodebahasa✓ ${feat("kodebahasa")? yes :no}
  │⭔ ${prefix}brainly✓ ${feat("brainly")? yes :no}
  │⭔ ${prefix}wallpaper✓ ${feat("wallpaper")? yes :no}
  │
  └────────────⭓
  
   ┌──⭓「 *SHORT URL* 」
   │
   │⭔ ${prefix}tinyurl✓ ${feat("tinyurl")? yes :no}
   │⭔ ${prefix}bitly✓ ${feat("bitly")? yes :no}
   │⭔ ${prefix}tourl ✓ ${feat("tourl")? yes :no}
   │
   └────────────⭓

   ┌──⭓「 *STORAGE* 」
   │
   │⭔ ${prefix}adderror✓ ${feat("adderror")? yes :no}
   │⭔ ${prefix}addstik✓ ${feat("addstik")? yes :no}
   │⭔ ${prefix}addvn✓ ${feat("addvn")? yes :no}
   │⭔ ${prefix}delerror✓ ${feat("delerror")? yes :no}
   │⭔ ${prefix}delvn✓ ${feat("delvn")? yes :no}
   │⭔ ${prefix}delstik✓ ${feat("delstik")? yes :no}
   │⭔ ${prefix}delvn✓ ${feat("delvn")? yes :no}
   │⭔ ${prefix}listerror✓ ${feat("listerror")? yes :no}
   │⭔ ${prefix}liststik✓ ${feat("liststik")? yes :no}   
   │⭔ ${prefix}listvn✓ ${feat("listvn")? yes :no}
   │⭔ ${prefix}listban✓ ${feat("listban")? yes :no}   
   │⭔ ${prefix}listblockcmd✓ ${feat("listblockcmd")? yes :no}
   │⭔ ${prefix}clearallerror✓ ${feat("clearallerror")? yes :no}
   │⭔ ${prefix}clearallban✓ ${feat("clearallban")? yes :no}
   │⭔ ${prefix}clearallblock✓ ${feat("clearallblock")? yes :no}
   │⭔ ${prefix}clearallUser✓ ${feat("clearallUser")? yes :no}
   │
   └────────────⭓
   
   ┌──⭓「 *ISLAMI MENU* 」
   │
   │⭔ ${prefix}hadis✓ ${feat("clearallUser")? yes :no}
   │⭔ ${prefix}alquran✓ ${feat("clearallUser")? yes :no}
   │⭔ ${prefix}tafsirsurah✓ ${feat("clearallUser")? yes :no}
   │
   └────────────⭓
   
   ┌──⭓「 *GAME MENU* 」
   │
   │⭔ ${prefix}math✓ ${feat("math")? yes :no}
   │⭔ ${prefix}asahotak✓ ${feat("asahotak")? yes :no}
   │⭔ ${prefix}tebakkalimat✓ ${feat("tebakkalimat")? yes :no}
   │⭔ ${prefix}susunkata✓ ${feat("susunkata")? yes :no}
   │⭔ ${prefix}caklontong✓ ${feat("caklontong")? yes :no}
   │⭔ ${prefix}tebakanime✓ ${feat("tebakanime")? yes :no}
   │⭔ ${prefix}tebakbendera✓ ${feat("tebakbendera")? yes :no}
   │⭔ ${prefix}tebakkimia✓ ${feat("tebakkimia")? yes :no}
   │⭔ ${prefix}tekateki✓ ${feat("tekateki")? yes :no}
   │⭔ ${prefix}tebakkabupaten✓ ${feat("tebakkabupaten")? yes :no}
   │
   └────────────⭓
   
   ┌──⭓「 *RPG MENU* 」
   │
   │⭔ ${prefix}berburu✓ ${feat("berburu")? yes :no}
   │⭔ ${prefix}mining✓ ${feat("mining")? yes :no}
   │⭔ ${prefix}leaderboard✓ ${feat("leaderboard")? yes :no}
   │⭔ ${prefix}heal✓ ${feat("heal")? yes :no}
   │⭔ ${prefix}inventori✓ ${feat("inventori")? yes :no}
   │⭔ ${prefix}mancing✓ ${feat("mancing")? yes :no}
   │⭔ ${prefix}darah✓ ${feat("darah")? yes :no}
   │⭔ ${prefix}buy✓ ${feat("buy")? yes :no}
   │
   └────────────⭓
   
   ┌──⭓「 *BUG MENU* 」
   │
   │⭔ ${prefix}sendvirtex✓ ${feat("sendvirtex")? yes :no}
   │⭔ ${prefix}jadibugstick✓ ${feat("jadibugstick")? yes :no}
   │⭔ ${prefix}bugv1✓ ${feat("bugv1")? yes :no}
   │⭔ ${prefix}bugv2✓ ${feat("bugv2")? yes :no}
   │⭔ ${prefix}bugv3✓ ${feat("bugv3")? yes :no}
   │⭔ ${prefix}bugv4✓ ${feat("bugv4")? yes :no}
   │⭔ ${prefix}bugv5✓ ${feat("bugv5")? yes :no}
   │⭔ ${prefix}bugv6✓ ${feat("bugv6")? yes :no}
   │⭔ ${prefix}bugv7✓ ${feat("bugv7")? yes :no}
   │⭔ ${prefix}bugv8✓ ${feat("bugv8")? yes :no}
   │⭔ ${prefix}bugv9✓ ${feat("bugv9")? yes :no}
   │⭔ ${prefix}bugv10✓ ${feat("bugv10")? yes :no}
   │⭔ ${prefix}bugv11✓ ${feat("bugv11")? yes :no}
   │⭔ ${prefix}bugv12✓ ${feat("bugv12")? yes :no}
   │⭔ ${prefix}bugv13✓ ${feat("bugv13")? yes :no}
   │⭔ ${prefix}bugv14✓ ${feat("bugv14")? yes :no}
   │⭔ ${prefix}bugv15✓ ${feat("bugv15")? yes :no}
   │⭔ ${prefix}bugv16✓ ${feat("bugv16")? yes :no}
   │⭔ ${prefix}bugv17✓ ${feat("bugv17")? yes :no}
   │⭔ ${prefix}bugv18✓ ${feat("bugv18")? yes :no}
   │⭔ ${prefix}bugv19✓ ${feat("bugv19")? yes :no}
   │⭔ ${prefix}bugv20✓ ${feat("bugv20")? yes :no}   
   │⭔ ${prefix}buggifv1✓ ${feat("buggifv1")? yes :no}
   │⭔ ${prefix}buggifv2✓ ${feat("buggifv2")? yes :no}
   │⭔ ${prefix}buggifv3✓ ${feat("buggifv3")? yes :no}
   │⭔ ${prefix}buggifv4✓ ${feat("buggifv4")? yes :no}
   │⭔ ${prefix}buggifv5✓ ${feat("buggifv5")? yes :no}
   │⭔ ${prefix}virgamv1✓ ${feat("virgamv1")? yes :no}
   │⭔ ${prefix}virgamv2✓ ${feat("virgamv2")? yes :no}
   │⭔ ${prefix}virgamv3✓ ${feat("virgamv3")? yes :no}
   │⭔ ${prefix}virgamv4✓ ${feat("virgamv4")? yes :no}
   │⭔ ${prefix}virgamv5✓ ${feat("virgamv5")? yes :no}   
   │⭔ ${prefix}bugvnv1✓ ${feat("bugvnv1")? yes :no}
   │⭔ ${prefix}bugvnv2✓ ${feat("bugvnv2")? yes :no}
   │⭔ ${prefix}bugvnv3✓ ${feat("bugvnv3")? yes :no}
   │⭔ ${prefix}bugvnv4✓ ${feat("bugvnv4")? yes :no}
   │⭔ ${prefix}bugvnv5✓ ${feat("bugvnv5")? yes :no}
   │⭔ ${prefix}bugstickv1✓ ${feat("bugstickv1")? yes :no}
   │⭔ ${prefix}bugstickv2✓ ${feat("bugstickv2")? yes :no}
   │⭔ ${prefix}bugstickv3✓ ${feat("bugstickv3")? yes :no}
   │⭔ ${prefix}bugstickv4✓ ${feat("bugstickv4")? yes :no}
   │⭔ ${prefix}bugstickv5✓ ${feat("bugstickv5")? yes :no}
   │⭔ ${prefix}bugvk✓ ${feat("bugvk")? yes :no}
   │⭔ ${prefix}bugzip✓ ${feat("bugzip")? yes :no}
   │⭔ ${prefix}buggas✓ ${feat("buggas")? yes :no}
   │⭔ ${prefix}bugpdf✓ ${feat("bugpdf")? yes :no}
   │⭔ ${prefix}bugxlsx✓ ${feat("bugxlsx")? yes :no}
   │⭔ ${prefix}bugpptx✓ ${feat("bugpptx")? yes :no}
   │⭔ ${prefix}bugdocx✓ ${feat("bugdocx")? yes :no}
   │⭔ ${prefix}bugsilver✓ ${feat("bugsilver")? yes :no}
   │⭔ ${prefix}bugcleitin✓ ${feat("bugcleitin")? yes :no}
   │⭔ ${prefix}bugsunshine✓ ${feat("bugsunshine")? yes :no}
   │⭔ ${prefix}bugmamaco✓ ${feat("bugmamaco")? yes :no}
   │⭔ ${prefix}bugvideov1✓ ${feat("bugvideov1")? yes :no}
   │⭔ ${prefix}bugvideov2✓ ${feat("bugvideov2")? yes :no}
   │⭔ ${prefix}bugvideov3✓ ${feat("bugvideov3")? yes :no}
   │⭔ ${prefix}bugvideov4✓ ${feat("bugvideov4")? yes :no}
   │⭔ ${prefix}bugvideov5✓ ${feat("bugvideov5")? yes :no}
   │⭔ ${prefix}bugbuttonv1✓ ${feat("bugbuttonv1")? yes :no}
   │⭔ ${prefix}bugbuttonv2✓ ${feat("bugbuttonv2")? yes :no}
   │⭔ ${prefix}bugbuttonv3✓ ${feat("bugbuttonv3")? yes :no}
   │
   └────────────⭓  
   
   ┏━━⬣  Thanks To 〽️
   ┃
   ┃ 🔥 Irfan Hariyanto
   ┃ 🔥 Dittaz
   ┃ 🔥 Nina Kawai
   ┃ 🔥 Resta Gamteng :v
   ┃ 🔥 Zeeone Ofc
   ┃ 🔥 Yudha Perdana
   ┃ 🔥 Yogi PW
   ┃ 🔥 Decode Denpa
   ┃ 🔥 Fernazer
   ┃ 🔥 X - Dev Team
   ┃ 🔥 XChillDs & Yuzu
   ┃ 🔥 Dika Ardnt
   ┃
   ┗━━⬣  ⿻ *Powered by Nodejs* ⿻️`
}
  


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
