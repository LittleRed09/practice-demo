const os = require('os')
function log(arg){
    console.log(arg.name, arg())
}
console.log('arch', os.arch())
console.log('cpus', os.cpus().length)
log(os.hostname)
log(os.networkInterfaces)
log(os.platform)
log(os.release)
log(os.totalmem)
log(os.freemem)
