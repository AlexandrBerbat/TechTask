const Bicycles = require("../models/bicycles");
const bicycleSchema = require("../routes/Schemas/bicycle");


showAll = async (req,res) => {
    let bicyclesArr = await Bicycles.find();
    console.log(bicyclesArr);
    res.render("showAllBicyclesPage", {arr: bicyclesArr});
}

addNewBicycle = async (req, res) => {
    // console.log("NEW BICYCLE");
    // res.send("New Bicycle Added!");

    const data = req.body;
    console.log(data);
    const resp = await Bicycles.addMarkById(data);
    res.send(resp);

}



module.exports = {
    showAll,
    addNewBicycle,
}