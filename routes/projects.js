const express = require("express");
const router = express.Router();
const getProjectsWithEmployees = require("../queries/projectWithEmployees");
const getProjectByEmployeeId = require("../queries/projectsByEmployeeId");
const getLatestProjects = require("../queries/latestProjects");

router.get("/", (req, res) => {
  const data = getProjectsWithEmployees();
  res.json(data);
});

router.get("/:id", (req, res) => {
  const employeeId = req.params.id;
  const data = getProjectByEmployeeId(employeeId);
  res.json(data);
});

router.get("/latest", (req, res) => {
  const data = getLatestProjects();
  res.json(data);
});

module.exports = router;
