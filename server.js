"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const session     = require('express-session');
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");



// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.use(session({
  secret: '2C44-4D44-WppQ38S',
  resave: true,
  saveUninitialized: true
}));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.get('/register', function (req, res) {
  res.render('register')
})


// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session && req.session.user === "amy" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};
 
// Login endpoint
app.get('/login', function (req, res) {
  if (!req.query.username || !req.query.password) {
    res.send('login failed');    
  } else if(req.query.username === "amy" || req.query.password === "amyspassword") {
    req.session.user = "amy";
    req.session.admin = true;
    res.redirect("/");
  }
});

app.post('/notes/create', function (req, res){
  if (!req.body.title || !req.body.externalurl || !req.body.img_url) {
    res.render('invalidField')
    
  }else{
    knex('notes').insert({ 
      'url': req.body.externalurl ,
       'img_url': req.body.img_url ,
       'title': req.body.title,
      })
      .then(function(err) {
              console.log(err);
            })
      
      res.redirect('/');
  }
});
 
// Get creat notes endpoint
app.get('/notes/create', auth, function (req, res) {
 res.render("create_note");
});


// Logout endpoint
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});
 

// Get creat notes endpoint
app.get('/notes/create', auth, function (req, res) {
  res.render("create_note");
});

// Get notes endpoint
app.get('/notes/:postid', auth, function (req, res) {
  
  const postid = req.params.postid;
   knex.select('*').from('notes').where({id:postid})
   .then(data => res.send(data))
});



// app.get('/notes/:postid', function (req, res) {
//   res.send("this is notes/:postid");
// });

// app.get('/notes/bookmarks/:user_id'), function (req, res){
//   res.send('this is notes/bookmarks/:user_id')
// }

// app.get('notes/bookmarks/:user_id/:bookmark_id'), function (req, res){
//   res.send('this is notes/bookmarks + :userid/bookmarks')
// }

// app.get('users/user_id'), function(req,res){
//   res.send ('eidt profile page')
// }

app.post('/register', (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.render('invalidField')
    
  }else{
    knex('users').insert({ 
      'first_name': req.body.first_name ,
       'last_name': req.body.last_name ,
       'email': req.body.email,
       'password': req.body.password,
      })
      .then(function(err) {
              console.log(err);
            })
      
      res.redirect('/');
  }
});


app.listen(PORT, () => {
  console.log("Resource wall app listening on port " + PORT);
});
