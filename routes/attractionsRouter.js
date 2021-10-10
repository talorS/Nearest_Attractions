const router = require("express").Router();
const atrBL = require('../models/attractionsBL');
const authBL = require('../models/authBL');
const auth = require("../middleware/authJWT");

router.get('/', (req, res, next) => {
  res.send('Welcome to Attractions Service!');
});

//get the access token
router.get("/token", (req, res, next) => { 
  res.status(200).json({token : authBL.getToken()});
});

router.get("/attractions",auth,async (req, res, next) => {
  const resp = await atrBL.getAttractions(req.query);
  res.status(200).json(resp);
});

router.get("/attractions/type",auth,async (req, res, next) => {
  const resp = await atrBL.getAttractionsType();
  res.status(200).json(resp);
});

router.get("*",(req, res, next) => {
  res.send("Page does not exist!");
});

module.exports = router;
