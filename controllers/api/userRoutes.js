const router = require('express').Router();
const { User } = require('../../models');


router.post("/signup", async (req,res) => {
  const userData = await User.create (req.body);

  req.session.save(() => {
    req.session.user_id = userData.id;
    req.session.logged_in = true;
    res.json({ user: userData, message: "You are logged in!"});
});
});

router.post('/login',  async (req, res) => {
  try {
    const userData = await User.findOne({ where: { password: req.body.password } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect user name or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect user name or password, please try again' });
      return;
    }
    //add if they both don't exist, then create new
    if (!userName && password) {
      res
      .status(400)
      .json({message: `Incorrect user name and password; please try again`})
    }
    

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

// // login.js works with userRoutes.js and login.handlebars
