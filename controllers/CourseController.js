let CourseService = require("../services/CourseService");
module.exports.course = function (req, res) {
    //从用户请求里面取得里面的数据,用户请求在req
    let course_Id = req.query.id;
    console.log(req.query)
    //把解析出来的数据交给业务逻辑层
    let courseService = new CourseService();
    courseService.getCoursesWithCourse(course_Id, function (ob) {
        res.json(ob);
    });
    //把业务逻辑层返回的数据发回给客户端
};
