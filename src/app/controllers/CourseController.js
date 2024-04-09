const Course = require("../models/Course");
const { singleMongooseToObject } = require("../../util/monngoose");
class CourseController {
  // GET /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: singleMongooseToObject(course) });
      })
      .catch(next);
  }
}

module.exports = new CourseController();
