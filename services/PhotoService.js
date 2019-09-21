//引入模块
let PhotoModel = require("../model/PhotoModel");
class PhotoService {
    constructor() { }
    getPhotosWithCourse(callback) {
        //创建对象
        let photoModel = new PhotoModel();
        photoModel.getAllPhoto(function (photos) {
            callback(photos);
        });
    }
}

module.exports = PhotoService;