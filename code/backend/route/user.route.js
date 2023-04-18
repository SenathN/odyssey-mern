const express = require("express");
const router = express.Router();

const {
    createUser,
    deleteUser,
    getUserById,
    getUser,
    updateUser
} = require("../controller/user.controller");

//@route  POST api/User Package
//@desc   add User Package record
router.post("/add", createUser);

//@route  GET api/User Package
//@desc   get User Package by Id
router.get("/:id", getUserById);

//@route  DELETE api/User Package
//@desc   delete User Package
router.delete("/:id", deleteUser);

//@route  GET api/User Package/all
//@desc   get all User Package
router.get("/", getUser);

//@route  PUT api/User Package
//@desc   update User Package record
router.put("/:id", updateUser);

module.exports = router;