var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const users = []
  for (let i = 1; i < 100; i++) {
    users.push({ id: i, name: "a", surname: "b" });
  }
  res.json(users);
});

module.exports = router;
