const Bicycles = require("../models/bicycles");
const bicycleSchema = require("../routes/Schemas/bicycle");


showAll = async (req, res) => {
    let bicyclesArr = await Bicycles.find();
    console.log(bicyclesArr);
    // res.render("showAllBicyclesPage", {arr: bicyclesArr});
    res.send({ arr: bicyclesArr })
}

addNewBicycle = async (req, res) => {

    const data = req.body;
    console.log(data);
    const resp = await Bicycles.add(data);
    res.send(resp);

}

changeStatus = async function (req, res) {

    const id = req.body.id;
    const newStatus = req.body.newStatus;



    if (newStatus !== "available" && newStatus !== "unavailable" && newStatus !== "busy") {
        res.send("incorrect status");
    }

    const resp = await Bicycles.changeStatus(id, newStatus);

    if (!resp) {
        res.send("update error")
    }

    res.send("updated successfully");

}

deleteBicycle = async function (req, res) {

    const id = req.body.id;

    const resp = await Bicycles.deleteBicycle(id);

    if (!resp) {
        console.log()
        res.send("delete error")
    }else {
        res.send("deleted successfully");
    }


}


getStats = async function (req,res) {
    const resp = await Bicycles.getStats();
    res.send(resp);
}


module.exports = {
    showAll,
    addNewBicycle,
    changeStatus,
    deleteBicycle,
    getStats
}