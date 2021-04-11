const router = require('express').Router();
const { User, Post, Reply } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const userData = await User.id.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));
    console.log('Users: ', users);

    res.render('dashboard', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;


// post routes will require an querySelector and an eventListener for both "post" and "reply" buttons (dashboard js). Then it needs to save an populate the text area on the handlebars
// // dashboard.js works with dashboard.handlebars and dashboard route.js as well as post and reply models