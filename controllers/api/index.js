const router = require('express').Router();
const userRoutes = require('./userRoutes');
 const postRoutes = require("./dashboardRoutes");
// const replyRoutes = require('./')

router.use('/users', userRoutes);
router.use('/post', postRoutes);


module.exports = router;
