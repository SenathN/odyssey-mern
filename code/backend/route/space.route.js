const express = require("express");
const router = express.Router();

// // multer config 
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname, '/uploads'))
//     },
//     filename: function (req, file, cb) {
//         cb(null, uuid() + file.originalname)
//     }
// })

// const fileFilter = (req, file, cb) => {
//     if (/jpeg|jpg|png/.test(file.mimetype)/*=== 'image/jpg' || file.mimetype === 'image/png'*/) {
//         cb(null, true)
//     } else {
//         cb(null, false)
//     }
// }

// const upload = multer({
//     storage: storage,
//     limits: {
//         fieldSize: 1024 * 1024 * 20
//     },
//     fileFilter: fileFilter
// })

const {
    createSpace,
    deleteSpace,
    getSpaceById,
    getSpace,
    updateSpace
} = require("../controller/Space.controller");

//@route  POST api/Space Package
//@desc   add Space Package record
router.post("/add", createSpace);

//@route  GET api/Space Package
//@desc   get Space Package by Id
router.get("/:id", getSpaceById);

//@route  DELETE api/Space Package
//@desc   delete Space Package
router.delete("/:id", deleteSpace);

//@route  GET api/Space Package/all
//@desc   get all Space Package
router.get("/", getSpace);

//@route  PUT api/Space Package
//@desc   update Space Package record
router.put("/:id", updateSpace);

module.exports = router;