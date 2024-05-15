const express = require("express")
const router = express.Router()
const TodoController = require("../controllers/todo_controller")

router.post('/', TodoController.create);
router.get('/', TodoController.get);
router.get('/:id', TodoController.getOne);
// router.put('/:id', TodoController.update)
router.delete('/:id', TodoController.delete)

module.exports = router;