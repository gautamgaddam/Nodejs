// // EVENT MODULE 
// const EventEmitter= require('events');



// class Logger extends EventEmitter{
// log(message){
//     //Send http request
//     console.log(message);
// //Raise an event
// this.emit('messageLoaded', {id: 1, url:"http://bid-insider.com"});
// }


// }
//Add 
const log= (req, res, next)=>{
console.log("Authenticating....");
next();
}


module.exports=log;

