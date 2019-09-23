//引入模块
let CourseModel = require("../model/CourseModel");
class CourseService {
  constructor() { }
  getCoursesWithCourse(course_Id,callback) {
    //创建对象
    let courseModel = new CourseModel();
    courseModel.getAllCourse(course_Id,function (courses) {
      callback(courses);
    });
  }
}

module.exports = CourseService;