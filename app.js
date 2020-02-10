
// const logger= require('./logger');
// // logger.log('message');
//  console.log(logger);

//PATH MODULE
// const path= require('path');
// let pathObj= path.parse(__filename);
// console.log(pathObj);

//OS MODULE
// const os= require('os');
// let totalMemory= os.totalmem();
// let freeMemory= os.freemem();
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

//FILE MODULE
// const fs= require('fs');
// fs.readdir('&', (error, files)=>{
// if(error) console.log(`Error ${error}`)
// else console.log(`Result ${files}`)
// })

// EVENT MODULE 
// const EventEmitter= require('events');
// const Logger= require('./logger');
// const logger= new Logger();

// //Register a listener
// logger.on('messageLoaded', (args)=>{
//     console.log('Listener Called', args);
// })

// logger.log('message');
// // //Raise an event
// // emitter.emit('messageLoaded', {id: 1, url:"http://bid-insider.com"});


//HTTP MODULE

const http= require('http');
const server= http.createServer((req, res)=>{
    if(req.url=== '/'){
        res.write('Hello World');
        res.end();
    }
});


// server.on('connection', (socket)=>{
//     console.log('New connection...')
// })
server.listen(3000);
console.log("Listening to port 3000")