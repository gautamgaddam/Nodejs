const config= require("config");
const courses= require('./routes/courses');
const home= require('./routes/home');
const express = require("express");
const logger = require("./middleware/logger");
const helmet= require('helmet');
const morgan= require('morgan')
const app = express();
const dbDebugger= require('debug')('app:db');
const startUpDebugger= require('debug')('app:startup');

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', './views');
//db work
dbDebugger("Conncted to datatbase");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use(logger);
if (app.get('env') ==='development') {
  app.use(morgan('tiny')); 
 startUpDebugger('Morgan enabled...');
} 
app.use('/api/courses', courses)
app.use('/', home);

//configuration
console.log(`Configuration: ${config.get('name')}`);
console.log(`Mail Server: ${config.get('mail.host')}`);
console.log(`Mail Password: ${config.get('mail.password')}`);

console.log(`Node_Env: ${process.env.NODE_ENV}`);




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening port ${port}`));
