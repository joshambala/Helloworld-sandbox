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
  // GET route for getting all of the authors
  app.get("/api/authors", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Author.findAll({}).then(function(dbAuthor) {
      // We have access to the authors as an argument inside of the callback function
      res.json(dbAuthor);
    });
  });
  // POST route for saving a new Author
  app.post("/api/authors", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Author.create({
      username: req.body.username,
      password: req.body.password
    }).then(function(dbAuthor) {
      // We have access to the new Author as an argument inside of the callback function
      res.redirect("/");
    });
  });
  // DELETE route for deleting authors. We can get the id of the Author to be deleted from
  // req.params.id
  app.delete("/api/authors/:id", function(req, res) {
    // We just have to specify which Author we want to destroy with "where"
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });
  // PUT route for updating authors. We can get the updated Author data from req.body
  app.put("/api/authors", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Author.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });
};