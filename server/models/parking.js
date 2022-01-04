const mongoose = require("mongoose");
//const { boolean } = require("webid1-conversions");

// const parkingSchema = new mongoose.Schema(
//     {
//         lot_name: {type: String, required:true, unique:true},
//         lot_capacity: {type: Number, required:true},
//         lot_availability: {type: Number, required:true},
//         price: {type: Number, required:true},
//         on_campus: { type: String }
//     }, { collection : 'parking_db'}
// );

const parkingSchema = new mongoose.Schema(
    {
        Parking_Lot: {type: String, required:true, unique:true},
        space_available: {type: Number, required:true},
        Total_Parking_Space: {type: Number, required:true},
        Availability: {type: String, required:true},
        Type1: { type: String },
        Type2: { type: String },
        Type3: { type: String },
        Price: { type: String},
        Payment_Method: {type: String},
        coordinates: [mongoose.Types.Decimal128 ],

    }, { collection : 'parking_db'}
);

const parking = mongoose.model("parking", parkingSchema);

module.exports = parking