const express = require("express");
const router = express.Router();

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