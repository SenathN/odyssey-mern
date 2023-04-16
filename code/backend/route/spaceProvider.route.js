const express = require("express");
const router = express.Router();

const {
    createSpaceProvider,
    deleteSpaceProvider,
    getSpaceProviderById,
    getSpaceProvider,
    updateSpaceProvider
} = require("../controller/spaceProvider.controller");

//@route  POST api/SpaceProvider Package
//@desc   add SpaceProvider Package record
router.post("/add", createSpaceProvider);

//@route  GET api/SpaceProvider Package
//@desc   get SpaceProvider Package by Id
router.get("/:id", getSpaceProviderById);

//@route  DELETE api/SpaceProvider Package
//@desc   delete SpaceProvider Package
router.delete("/:id", deleteSpaceProvider);

//@route  GET api/SpaceProvider Package/all
//@desc   get all SpaceProvider Package
router.get("/", getSpaceProvider);

//@route  PUT api/SpaceProvider Package
//@desc   update SpaceProvider Package record
router.put("/:id", updateSpaceProvider);

module.exports = router;