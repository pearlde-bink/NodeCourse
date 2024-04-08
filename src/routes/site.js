var express = require("express");
var router = express.Router();

const siteController = require("../app/controllers/SiteController");

router.use("/:slug", siteController.search);
router.use("/", siteController.home);

module.exports = router;
