const model = require('mongoose').model;
const schemas = require('./db-schemas');

const articles = model('Articles',schemas.articles);
const comments = model('Comments',schemas.comments);
const users = model('Users',schemas.users)

module.exports = {articles:articles,comments:comments,users:users}