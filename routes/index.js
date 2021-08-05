var express = require('express');
var router = express.Router();

const multer = require("multer");
let upload = multer();

const bicycles = require("../controllers/bicycles")

const Ajv = require("ajv");
const bicycleSchema = require("./Schemas/bicycle");

const validator = (req, res, next) => {
  let data = req.body;
  const ajv = new Ajv.default({ allErrors: true });
  const valid = ajv.validate(bicycleSchema, data);
  console.log(valid);

  if (!valid) {

    console.log(ajv.errors);

    
    ajv.errors = ajv.errors.map(er => `${er.instancePath.slice(1)} ${er.message}`);
    let resSendStr = "";

    res.send({status:"Validate error",errorsArr: ajv.errors});

    return;
  }

  next();
}




/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("Hello World!");
});

router.get("/all", bicycles.showAll);

// router.post("/addbicycle", upload.none(), validator, (req,res) => {
//   console.log("123 post is working");
//   res.send(req.body);
// })

router.post("/addbicycle", upload.none(), validator, bicycles.addNewBicycle);

router.post("/updatestatus", upload.none(), bicycles.changeStatus);

router.post("/deletebicycle", upload.none(), bicycles.deleteBicycle);

module.exports = router;
