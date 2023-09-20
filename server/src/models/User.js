const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
      },
      email: {
         type: DataTypes.STRING,
         isEmail: true,
         allowNull: false,
         unique: true
      },
      password: {
         type: DataTypes.STRING,
      }
   }, { timestamps: false });
};
