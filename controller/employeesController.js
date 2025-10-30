const data = {};
data.employees = require("../model/employees.json");

const getAllEmployees = (req, res) => {
  res.json(data.employees);
};

const getEmployee = (req, res) => {
  res.json({ id: req.params.id });
};

const createNewEmployee = (req, res) => {
  res.json({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    id: req.body.id,
  });
};

const updateEmployee = (req, res) => {
  res.json({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    id: req.body.id,
  });
};

const deleteEmployee = (req, res) => {
  res.json({
    id: req.body.id,
  });
};

module.exports = {
  getAllEmployees,
  getEmployee,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
};
