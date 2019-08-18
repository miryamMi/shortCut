exports.get=function getUsers(req,res) {
  let users = require('./data-test.json');
  res.json(users) ;
}

