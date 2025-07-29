<<<<<<< HEAD
//jshint esversion:6
const router = require('express').Router();
const customer = require('../controllers/customer.controller');


router.get("/login", customer.loginGet);

router.post("/register", customer.register);

router.post("/regsub", customer.regsub);

router.post("/login", customer.login);

module.exports = router;
=======
//jshint esversion:6
const router = require('express').Router();
const customer = require('../controllers/customer.controller');


router.get("/login", customer.loginGet);

router.post("/register", customer.register);

router.post("/regsub", customer.regsub);

router.post("/login", customer.login);

module.exports = router;
>>>>>>> 2e64ce18f3c02c520f8091558480e941cb207df5
