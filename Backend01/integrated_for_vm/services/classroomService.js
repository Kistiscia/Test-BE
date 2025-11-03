const ClassroomRepository = require("../repositories/classroomRepository");

const ClassroomService = {
    getAllStudents: (callback) => {
        ClassroomRepository.getAll(callback);
    },
};

module.exports = ClassroomService;
