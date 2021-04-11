const router = require('express').Router();
const { User, Post, Reply } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", (req, res)=>{
    console.log("posting new post");
    const{userId, title, content} = req.body;
    console.log(userId,title,content);
    Post.create({name: userId, post:content})
    res.send("posting new post")
})

module.exports = router;

// "name": "Blake",
//         "post": "U of A! U of A! U of A!"


// post routes will require an querySelector and an eventListener for both "post" and "reply" buttons (dashboard js). Then it needs to save and populate the text area on the handlebars
// // dashboard.js works with dashboard.handlebars and dashboard route.js as well as post and reply models