module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
      // the routeName gets saved as a string
    routeName: DataTypes.STRING,
    // the user's username (a string)
    username: DataTypes.STRING,
    // the user's password (a string)
    password: DataTypes.STRING,
    // the user's profile pic as a url (a string)
    profile_pic: DataTypes.STRING,
    // the user's age (an integer)
    age: DataTypes.INTEGER,
    // the user's gender (a string)
    gender: DataTypes.STRING,
    // the user's ethnicity (a string)
    ethnicity: DataTypes.STRING,
    // the name of the user's bootcamp (a string)
    bootcamp_name: DataTypes.STRING,
    // the duration of the user's program (a integer)
    date_range: DataTypes.INTEGER,
    // the user's age (a string)
    location: DataTypes.STRING,
    // the user's employment status (a boolean)
    employed: DataTypes.BOOLEAN,
    // the user's job title after bootcamp (a string)
    title: DataTypes.STRING,
    // the user's salary (an integer)
    salary: DataTypes.INTEGER
  });

  // Author.sync();
  return Author;
};
