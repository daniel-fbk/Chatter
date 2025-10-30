const express = require("express");
const router = express.Router();
const path = require("path");
const employeesController = require("../../controller/employeesController");
const ROLES_LIST = require("../../config/roles_list");
const verifyRoles = require("../../middleware/verifyRoles");
const {
  handleAddEmployee,
  handleGetAllEmployees,
  handlegetEmployeeByID,
  handleUpdateEmployee,
  handleDeleteEmployee,
} = require("../../controller/employeesSqlController");

router.post("./addEmployee", handleAddEmployee);
router.get("/", handleGetAllEmployees);
router.get("./:id", handlegetEmployeeByID);
router.put("/:id", handleUpdateEmployee);
router.delete("/:id", handleDeleteEmployee);

// const data = {};
// data.employees = require("../../model/employees.json");

// router
//   .route("/")
//   .get(employeesController.getAllEmployees)
//   .post(verifyRoles(ROLES_LIST.Admin), employeesController.createNewEmployee)
//   .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), employeesController.updateEmployee)
//   .delete(verifyRoles(ROLES_LIST.Admin), employeesController.deleteEmployee);

// router.route("/:id").get(employeesController.getEmployee);

module.exports = router;
