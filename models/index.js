const User = require('./User');
const Post = require('./post');
const Reply = require('./reply');


// user has many posts
// The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).
User.hasMany(Post, {
    foreignKey: "user_id"
});
// user has many replies
User.hasMany(Reply, {
    foreignKey: "user_id"
});
// posts belong to one user
// The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A).
Post.belongsTo(User, {
    foreignKey: "user_id"

});
// replies belong to one user
Reply.belongsTo(User, {
    foreignKey: "user_id"

})

module.exports = { User, Post, Reply };

