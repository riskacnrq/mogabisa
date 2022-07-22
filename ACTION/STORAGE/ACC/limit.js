require("../../OPTIONS/settings.js")
const fs = require('fs')
let _LIMIT = JSON.parse(fs.readFileSync('./ACTION/STORAGE/ADD/limit.json'))

exports.addInventoriLimit = (sender) => {
        const obj = {id: sender, limit: limitAwal}
         _LIMIT.push(obj)
        fs.writeFileSync('./ACTION/STORAGE/ADD/limit.json', JSON.stringify(_LIMIT))
   }
exports.checkDataLimit = (sender) => {
            let status = false
            Object.keys(_LIMIT).forEach((i) => {
                if (_LIMIT[i].id === sender) {
                    status = true
                }
            })
            return status
        }
exports.kurangLimit = (sender, amount) => {
            let position = false
            Object.keys(_LIMIT).forEach((i) => {
                if (_LIMIT[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _LIMIT[position].limit -= amount
                fs.writeFileSync('./ACTION/STORAGE/ADD/limit.json', JSON.stringify(_LIMIT))
            }
        }  
exports.tambahLimit = (sender, amount) => {
            let position = false
            Object.keys(_LIMIT).forEach((i) => {
                if (_LIMIT[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _LIMIT[position].limit += amount
                fs.writeFileSync('./ACTION/STORAGE/ADD/limit.json', JSON.stringify(_LIMIT))
            }
        }          
exports.getLimit = (sender) => {
            let position = false
            Object.keys(_LIMIT).forEach((i) => {
                if (_LIMIT[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _LIMIT[position].limit
            }
        }        
