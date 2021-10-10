const mongoose = require('mongoose');

//create ORM for mongoDB
const attractionSchema = new mongoose.Schema({
  _id: Number,
  Id:Number,
  Name: String,
  ShortDescription: String,
  FullDescription: String,
  Vendor_Name: String,
  Product_Url: String,
  VendorId: Number,
  Accessibility: String,
  Address: String,
  Attraction_Type: [String],
  Blue_Flag: String,
  City: String,
  Diving_beach: String,
  Email:String,
  Notes:String,
  Notes_for_opening_hours:String,
  Opening_Hours:String,
  Parking:String,
  Phone:String,
  Region:String,
  Scheduled_visits:String,
  Suitable_for_Children:String,
  Surfing_beach:String,
  URL:String,
  X:Number,
  Y:Number
});

module.exports = mongoose.model('attractions', attractionSchema);

