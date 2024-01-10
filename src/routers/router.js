let router = require("express").Router();
const organizationController = require('../controllers/checkUser/index')

router.route("/auth").get(organizationController.checkUser)

module.exports = router;
