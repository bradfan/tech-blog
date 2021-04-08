const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../utils/auth');
const { post } = require('./userRoutes');


router.get("/dashboard", async(req,res) => {
    try{
        const postInput = await Post.findAll(req.body);
        res.render("dashboard")
    }catch (err) {
        res.status(500).json(err);
    }
    
    
})
// // dashboard.js works with dashboard.handlebars and dashboard route.js as well as post and reply models