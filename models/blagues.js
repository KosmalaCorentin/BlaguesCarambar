const { DataTypes } = require('sequelize');
const db = require('../db/database');

const Blague = db.define(
  'Blague',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    BlagueIntro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BlagueReponse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
  },
);

module.exports = Blague;