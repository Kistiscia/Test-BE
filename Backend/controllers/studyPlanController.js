
const StudyPlanService = require("../services/studyPlanService");

const StudyPlanController = {
    getAll: (req, res) => {
        StudyPlanService.getAllStudyPlans((err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        });
    }
};

module.exports = StudyPlanController;
