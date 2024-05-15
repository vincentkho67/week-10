const express = require("express")
const router = express.Router()
const UserController = require("../controllers/user_controller")

router.post('/', UserController.create);
router.get('/', UserController.get);
router.get('/:id', UserController.getOne);
// router.put('/:id', UserController.update)
router.delete('/:id', UserController.delete)

module.exports = router;