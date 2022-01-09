const os = require('os')

//info about user
const user = os.userInfo();
console.log(user)

//method that returns the system update in seconds
console.log(`The System uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)