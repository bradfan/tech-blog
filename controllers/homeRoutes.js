const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth");

// adding withAuth to the line below changes homepage to login and won't get login - something wrong with log in.
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const postData = await Post.findAll({
    
    });

    const users = userData.map((project) => project.get({ plain: true }));
    const posts = postData.map((project) => project.get({ plain: true }));
    console.log("Users: ", users);
    console.log(req.session);

    res.render("homepage", {
      users,
      posts,
      logged_in: req.session.logged_in,
      isLoggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// router.use(withAuth);

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    console.log("Session", typeof req.session.user_id)
    const postData = await Post.findAll( {
      where: {id:req.session.user_id}
    })
    //get all your posts using your req.session.user_id (hint where), store in a variable, send it with your handlebars
    console.log("postData", postData)
    const posts = postData.map((post) => post.get({ plain:true}))
    console.log("posts",posts)

   res.render("dashboard", 
     {posts:posts}
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// homeRoutes.js works with homepage.js and homepage handlebars with the post and reply models.

