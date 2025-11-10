const ClassroomService = require("../services/classroomService");

const ClassroomController = {
    getAllStudents: (req, res) => {
        ClassroomService.getAllStudents((err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results);
        });
    },
};

module.exports = ClassroomController;
