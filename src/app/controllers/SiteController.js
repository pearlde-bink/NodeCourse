const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/monngoose");
class SiteController {
  // GET /home
  home(req, res, next) {
    // res.render('home');
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: multipleMongooseToObject(courses) });
      })
      .catch(next);
  }

  // GET /news/:slug
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
