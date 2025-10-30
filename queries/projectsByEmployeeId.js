const db = require("../database");

function getProjectByEmployeeId(employeeId) {
  return db
    .prepare(
      `
        SELECT project_name, deadline
        FROM projects
        WHERE employee_id = ?
        `
    )
    .all();
}

module.exports = getProjectByEmployeeId;
