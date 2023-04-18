const Space = require('../model/space.model');

//Create new space pack 
const createSpace = async (req, res) => {
    //catching data from front end to these attributes
    const { name, description, location, peopleCount, rate } = req.body;

    //create a object to store saved data to save in the mongo db database
    const space = new Space({
        name, 
        description, 
        location, 
        peopleCount, 
        rate
    });

    //sending created space pack object to the database 
    await space.save()
        .then(() => res.json('Space has been created.'))
        .catch(err => res.status(400).json('Error : ' + err));
};

//Delete space pack by id
const deleteSpace = async (req, res) => {
    console.log("DEL func: " + req.params.id);
    Space.findByIdAndDelete(req.params.id)
        .then(() => res.json('space profile has been Deleted'))
        .catch(err => res.status(400).json('Error : ' + err));
}

//get space info by id
const getSpaceById = async (req, res) => {
    try {
        const space = await Space.findById(req.params.id);
        if (space)
            res.json(space)
        else {
            res.json("No space record in the database!");
        }
    } catch (error) {
        res.status(500).send("Server Error" + error);
    }
};

//get all space records
const getSpace = async (req, res) => {
    try {
        const space = await Space.find();
        res.json(space)
    } catch (error) {
        res.status(500).send("Server Error : " + error);
    }
}

//Update Exsisting Ticket record
const updateSpace = async (req, res) => {
    Space.findByIdAndUpdate(req.params.id).
        then((exsistingSpace) => {
            exsistingSpace.name = req.body.name;
            exsistingSpace.description = req.body.description;
            exsistingSpace.location = req.body.location;
            exsistingSpace.peopleCount = req.body.peopleCount;
            exsistingSpace.rate = req.body.rate;
            
            exsistingSpace.save()
                .then((updatedSpace) => res.json(updatedSpace))
                .catch((error) => res.status(400).json("Error: " + error));
        })
        .catch((error) => res.status(400).json("Error (update) : " + error));
};

//export 
module.exports = {
    createSpace,
    deleteSpace,
    getSpaceById,
    getSpace,
    updateSpace
};

