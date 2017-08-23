module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    
  });
  //
  // Post.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Post.belongsTo(models.Author, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Review;
};
