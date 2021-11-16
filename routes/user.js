const express = require("express");
const fs = require("fs");
const router = express.Router();
const coursedata = require("../controller/user");

router.get("/", coursedata.getCourse)
router.get("/:id", coursedata.CourceId)
router.post("/", coursedata.create_Cource)
router.delete("/:id", coursedata.cource_delete)
router.put("/:id", coursedata.update_courceParti)
router.patch("/:id", coursedata.update_course)

module.exports = router;