
const express = require("express");
const router = express.Router();
const StudyPlanController = require("../controllers/studyPlanController");


router.get("/", StudyPlanController.getAll);

module.exports = router;
