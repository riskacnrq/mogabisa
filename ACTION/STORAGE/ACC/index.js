const fs = require('fs');

const tebakkimia = fs.readFileSync('./ACTION/STORAGE/ADD/RES/tebakkimia.json');
const asahotak = fs.readFileSync('./ACTION/STORAGE/ADD/RES/asahotak.json');
const susunkata = fs.readFileSync('./ACTION/STORAGE/ADD/RES/susunkata.json');
const tebakkalimat = fs.readFileSync('./ACTION/STORAGE/ADD/RES/tebakkalimat.json');
const tekateki = fs.readFileSync('./ACTION/STORAGE/ADD/RES/tekateki.json');
const caklontong = fs.readFileSync('./ACTION/STORAGE/ADD/RES/caklontong.json');
const tebakbendera = fs.readFileSync('./ACTION/STORAGE/ADD/RES/tebakbendera.json');
const tebakanime = fs.readFileSync('./ACTION/STORAGE/ADD/RES/tebakanime.json');
const tebakkabupaten = fs.readFileSync('./ACTION/STORAGE/ADD/RES/tebakkabupaten.json');
const tebaklagu = fs.readFileSync('./ACTION/STORAGE/ADD/RES/tebaklagu.json');
const tebaklirik = fs.readFileSync('./ACTION/STORAGE/ADD/RES/tebaklirik.json');
module.exports = { tebakkimia, asahotak, susunkata, tebakkalimat, tekateki, caklontong, tebakbendera, tebakanime, tebakkabupaten, tebaklagu, tebaklirik }
