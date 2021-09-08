const args = process.argv.slice(2)
//console.log('args',args)

// fs.open()
const fs = require('fs')
fs.open('./hahaha.txt', 'r', (err, fd)=>{
    //console.log('fd', fd)
})

// fs.stat()
fs.stat('./hahaha.txt', (err, stat) => {
    //console.log('stat', stat)
    console.log('isFile: ', stat.isFile())
    console.log('size: ', stat.size)
})

// fs.statSync()
const stat2 = fs.statSync('./hahaha.txt')
//console.log('stat2', stat2)
stat2.isFile()