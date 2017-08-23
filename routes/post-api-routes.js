// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts", function(req, res) {
    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findAll({
      where: query,
      include: [db.Author]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Get rotue for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Author]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/bootcamps", function(req, res) {
    var arr =
    var bootcamp = {
      name: 'UC Berkeley Extension',
      outcomes: 90,
      location: 'San Francisco',
      logo:'Berkeley',
      rating:5,
      technology:'HTML, CSS, JS, NODE, SQL',
      duration:6,
      comments:'This course was great. I would totally do it again.',
      costs:10000,
      url:'www.codingbootcamp.berkeley.edu/'
    }
    // {
    //   name: 'Flatiron',
    //   outcomes: 95,
    //   location: 'New York City',
    //   logo:'Flatiron',
    //   rating:5,
    //   technology:'HTML, CSS, JS, NODE, Ruby, iOS, SQL',
    //   duration:3,
    //   comments:'Best value for your money!',
    //   costs:17000,
    //   url:'www.flatiron.com/'
    // },
    // {
    //   name: 'Codeup',
    //   outcomes: 95,
    //   location: 'San Antonio',
    //   logo:'Codeup',
    //   rating:5,
    //   technology:'HTML, CSS, JS, NODE, Ruby, iOS, SQL',
    //   duration:3,
    //   comments:'They found the key to learning to web dev!',
    //   costs:17000,
    //   url:'www.codeup.com/'
    // }
  ;
    db.Bootcamp.create(bootcamp).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
        res.json(dbPost);
      });
  });
};
