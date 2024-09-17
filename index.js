const os = require("os");
console.log("My first app");
console.log(`File Name: ${__filename}`);
console.log(`Directory Name: ${__dirname}`);

console.log("=============== Built in Module - OS =======================");
console.log(`Arch: ${os.arch()}`);
console.log(`cpus: ${os.cpus()}`);
console.log(`freemem: ${os.freemem()}`);
console.log(`totalmem: ${os.totalmem()}`);
console.log(`hostname: ${os.hostname()}`);
console.log(`platform: ${os.platform()}`);
console.log(`release: ${os.release()}`);
console.log(`type: ${os.type()}`);
console.log(`uptime: ${os.uptime()}`);
console.log(`userInfo: ${os.userInfo()}`);

console.log("%c====== Global Objects in JS =========");
console.log(global);
console.log(console);
console.log(process);
console.log(__filename);
console.log(__dirname);
console.log(module);
