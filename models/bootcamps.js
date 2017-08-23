module.exports = function(sequelize, DataTypes) {
  var Bootcamp = sequelize.define("Bootcamp", {
    bootcamp_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    outcomes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    technology: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    costs: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });


  //
  // Bootcamp.associate = function(models) {
  //   // We're saying that a Bootcamp should belong to an Author
  //   // A Bootcamp can't be created without an Author due to the foreign key constraint
  //   Bootcamp.belongsTo(models.Author, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  // Makes the Bootcamp model available for other files (will also create a table)
  return Bootcamp;
  module.exports = Bootcamp;
};
