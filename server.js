const express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient
const mongoose = require("mongoose");
const passport = require("passport"); // for authentication - many strategies
// const session = require("express-session"); // session middleware
// const MongoStore = require("connect-mongo")(session); // stores the session
const methodOverride = require("method-override"); // override methods
// const flash = require("express-flash");
const logger = require("morgan"); // for logs
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");

// load config file
require('dotenv').config({path: "./config/.env"})

//Connect To Database
connectDB();


// MIDDLEWARE - methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method
// sets EJS as the rendering engine
app.set('view engine', 'ejs')
// serves static files to all pages
app.use(express.static('public'))
// required for POST and PUT requests - sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
// app.use(
//     session({
//       secret: "keyboard cat",
//       resave: false, // don't save session if it wasn't modified
//       saveUninitialized: false, // don't create session until something is stored
//       store: new MongoStore({ mongooseConnection: mongoose.connection }), // store session in DB
//     })
//   );

//Use flash messages for errors, info, ect...
// app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);


// "listen" connects on a specified host and port
// "process.env" using varibles in env, if not available use PORT varible
// log in console
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})





