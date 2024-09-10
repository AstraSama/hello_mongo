const express = require("express");
const router = express.Router();

const pet_controller = require("../Controllers/pet_controller.js")

router.post("/", pet_controller.store);
router.get("/", pet_controller.index);
router.get("/", pet_controller.show);
router.put("/", pet_controller.update);
router.delete("/", pet_controller.destroy);

module.exports = router;