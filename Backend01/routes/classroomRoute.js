const express = require("express");
const router = express.Router();
const ClassroomController = require("../controllers/classroomController");

router.get("/study-plans", ClassroomController.getAllStudents);

module.exports = router;
