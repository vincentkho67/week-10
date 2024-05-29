const express = require("express")
const router = express.Router()
const UserController = require("../controllers/user_controller")
const auth = require("../middleware/auth")
const multer = require("multer")
const path = require("path")

// engine storage untuk multer
const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname,"../upload"));
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
            cb(null, file.fieldname + '-' + uniqueSuffix)
        }
    }
)

const upload = multer({ storage: storage })
router.post('/upload/:id', upload.single('image_url'), UserController.upload)
router.post('/cek', UserController.upload)

router.post('/', UserController.create);
router.get('/', UserController.get);
router.get('/:id', UserController.getOne);
router.delete('/:id', UserController.delete)
router.post('/login', UserController.login)
router.post('/register', UserController.register)

module.exports = router;