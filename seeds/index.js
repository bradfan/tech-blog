const sequelize = require('../config/connection');
const { User, Post, Reply } = require('../models');

const userData = require('./userData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Reply.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
