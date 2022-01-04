const express = require("express");
const parkingModel = require("../models/parking");
const router = express.Router();

// get method
router.get("/parkings", async (request, response) => {
    try {
      // Sort by Total Parking Space, PLEASE CHANGE TO Space available after Sprint 3 - Check
      //const mysort = {Total_Parking_Space: 1}
      const mysort = {space_available: -1}
      const parkings = await parkingModel.find().sort(mysort);
      response.send(parkings);
    } catch (error) {
      response.status(500).send(error);
    }
});

router.put("/parkings/:_id", async (req, res) => {
  await parkingModel.findByIdAndUpdate({_id: req.params._id}, req.body).then(function(){
    console.log(parkingModel.findOne({_id: req.params._id}))
  });
});


router.get("/parkinglot/:lotName", async (request, response) => {
  try {
    const id = req.params.lotName;
    const parkings = await parkingModel.findOne({_id: id});
    response.send(parkings);
  } catch (error) {
    console.log(error);
    response.send(error);
  }
});

// post method
/*
router.post("/add_lot", async (request, response) => {
    const parking = new parkingModel(request.body);
  
    try {
      await parking.save();
      response.send(parking);
    } catch (error) {
      response.status(500).send(error);
    }
});*/

module.exports = router;