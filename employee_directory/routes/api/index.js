const router = require("express").Router();
const employeeRoutes = require("./api");

router.use("/employees", employeeRoutes);

module.exports = router;