
const StudyPlanRepository = require("../repositories/studyPlanRepository");

const StudyPlanService = {
    getAllStudyPlans: (callback) => {
        StudyPlanRepository.getAll(callback);
    }
};

module.exports = StudyPlanService;
