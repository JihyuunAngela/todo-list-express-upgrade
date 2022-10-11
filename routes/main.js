const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.post("/addTodo", homeController.createItem)
router.post("/:id/secondaryAddTodo", homeController.createSecondaryItem)
router.put("/markComplete/:id", homeController.markComplete)
router.put("/markUncomplete/:id", homeController.markUncomplete)
router.delete("/deleteItem/:id", homeController.deleteItem)

module.exports = router;
