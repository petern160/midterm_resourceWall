"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const session     = require('express-session');
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();
var cookieSession = require('cookie-session')

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

app.use(cookieSession({
  name: 'session',
  keys: ['test'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

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
  const query = knex.select('first_name', 'url', 'img_url', 'title', 'rating_counter', "notes.id", 'category_id', 'user_id')
  .from('notes').leftJoin('users', 'users.id', 'notes.user_id' )
  console.warn(query.toString())
  query.then(data => {
    console.log(data)
    res.render('index',{
    data:data



  })
  
})

 
});


// Register page
app.get('/register', function (req, res) {
  res.render('register')
})
//user authenticationd helper
var auth = function(req, res, next) {
  console.log(req.session)
  if (req.session && req.session.userID){
  
    return next();
  }else{
    return res.sendStatus(401);
  }
 };


// Login endpoint
app.get('/login', function (req, res) {
res.render('login')

})

app.post('/login', function (req, res){
  knex.select('email', 'password', 'id').from('users')
  .then(data => {
    data.forEach(function(element) {
      if(req.body.email === element.email && req.body.password === element.password){
        req.session.userID = element.id
        req.session.firstName = element.first_name
      //  knex.select('id').from('users').where('email', req.body.email)
      //  .then( function (userID){
      //    console.warn(`user table, id result: ${userID}`);
      //    req.session.userID = userID[0].id
         
      //    console.log(req.session.userID)
      //  });
        console.log('login success')
        res.redirect('/')
      }
    })
  })
});


app.post('/search', function(req, res){
  //list search term variable from resquest
  const searchTerm = req.body.searchWords

  knex.select('first_name', 'url', 'img_url', 'title', 'rating_counter', "notes.id", 'category_id', 'user_id')
  .from('notes').leftJoin('users', 'users.id', 'notes.user_id' )
  // knex.select('*').from('notes')
  .where('title', searchTerm)
  .then( data => {
      console.log(data.length);
      if(data.length === 0){
      res.send('error search not found')
      }else{
      res.render('search', {data:data})
      }
  })
})


// Search page
app.get('/search', function(req, res){
  // const searchTerm = req.body.data
  // console.log('this is search temr', searchTerm)
  // knex.select('title').from('notes')
  // .where('title', searchTerm)
  // .then( data => {
  //   res.render('search', {data:searchTerm})
   
  // })
  
})
// POST Create note page
app.post('/notes/create', auth, function (req, res){
  if (!req.body.title || !req.body.externalurl || !req.body.img_url) {
    res.render('invalidField')
    
  }else{
    knex('notes').insert({ 
      'url': req.body.externalurl ,
       'img_url': req.body.img_url ,
       'title': req.body.title,
       'rating_counter': 0,
       'user_id': req.session.userID,
       'category_id': req.body.category,
      })
      .then(function(err) {
              console.log(err);
            })
      console.log(req.body)
      res.redirect('/');
  }
});
 
// Get create notes endpoint
app.get('/notes/create', auth,  function (req, res) {
 res.render("create_note");
});


// Logout endpoint
app.get('/logout', function (req, res) {
  res.clearCookie('session')
  res.redirect('/');
});

// Get notes endpoint
app.get('/notes/:postid',  function (req, res) {
  //i want to look at note id 1 and any comments  associated with notes id 1
  const postid = req.params.postid;

   knex.select('title', 'first_name', 'img_url', 'rating_counter', 'url', 'category_id', 'notes.id').from('notes')
   .leftJoin('users', 'users.id', 'notes.user_id')
   .leftJoin('comments', 'users.id', 'comments.note_id')
   .where('notes.id', postid)
   .then(noteData => {
     knex.select('*').from('comments')
     .rightJoin('notes', 'comments.note_id', 'notes.id')
     .leftJoin('users', 'comments.user_id', 'users.id')
    //  .leftJoin('users', 'comments.user_id', 'users.id')
     .where('notes.id', postid)
     .then(function(data) {
      console.log(data)
     res.render('note',{
          data,
          noteData,})
    })

   })

   app.post('/notes/:postid', function (req, res) {
    

    let postId = parseInt(req.params.postid);
    // console.log(postId);
    // console.log(typeof postId);
    
    knex('bookmarks').insert({
      user_id: req.session.userID,
      note_id: postId
    })
    .returning('id')
    .then((id)=>{
      // console.log("We are good ",id);
      res.redirect(req.get('referer'))
    });
   
   })
 app.post('/notes/:postid/up', function (req, res){
  let postId = parseInt(req.params.postid);
  knex.select('rating_counter')
  .from('notes')
  .where({id : postId})
  .increment('rating_counter', 1)
  .then(data => {
    res.render('note', {data:data})
  })
  
 })
   
});
 


app.get('/notes/bookmarks/:user_id',  function (req, res) {
  // select * from bookmarks where user_id = sesssion_id 
  const user_ID = req.session.userID;
  knex.select('note_id', 'title', 'bookmarks.user_id', 'img_url', 'rating_counter', 'url', 'users.first_name').from('bookmarks')
  .leftJoin('notes', 'bookmarks.note_id', 'notes.id')
  .leftJoin('users', 'bookmarks.user_id', 'users.id')
  .where('bookmarks.user_id', user_ID)
  .then((data) => {
    console.log("Data ",data);
    if(data.length > 0){
      //we found records;
      res.render ('bookmarks', {data})
    } else {
      res.render ('bookmarks', {data})
    }
    
  });
});



app.post('notes/bookmarks/:user_id', (req, res) => {
  
  // knex('bookmarks').insert({
  //   user_id: req.session.userID,
  //   note_id: req.params.postid,
  // }).then(data => {
  //    console.log(data)
  // })


})


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
