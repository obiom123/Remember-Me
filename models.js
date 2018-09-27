const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'project-3-remember-me',
  dialect: 'postgres'
});


// Create models here
const User = sequelize.define('user', {
  username: { type: Sequelize.STRING, unique: true },
  passwordDigest: Sequelize.STRING
})

const Contact = sequelize.define('contact', {
  name: Sequelize.TEXT,
  contactInfo: Sequelize.TEXT,
  whereWeMet: Sequelize.TEXT,
  importance: Sequelize.INTEGER(2),
  conversation: Sequelize.TEXT,
  linkedinFriends: Sequelize.BOOLEAN
})

User.hasMany(Contact);
Contact.belongsTo(User);


module.exports = {
  // Export models
  User: User,
  Contact: Contact,
  sequelize: sequelize
};
