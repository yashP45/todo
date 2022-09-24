const { Router } = require("express")

const router = Router();
const todoController = require('../Controllers/todoController')
router.get("/get-todo", todoController.getToDo)
router.post("/create-todo", todoController.createToDo)

module.exports = router;