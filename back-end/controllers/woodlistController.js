const express = require("express");

const woodList = express.Router();

const {
    getAllWood,
    specificWood,
    createWoodItem,
    deleteWoodItem,
    updateWoodItem,
} = require("../queries/woodList");



woodList.get('/', async (req, res) => {
    console.log("GET / from wood_list")
    const allWood = await getAllWood();
    allWood ? 
    res.json({ 
        success: true,
            payload: allWood}) : 
    res.status(404).send({ 
        success: false,
            payload: "/page not found/"});
});




woodList.get('/:id', async (req, res) => {
    const { id } = req.params;
    console.log("GET /:id from wood_list");
    const oneItem = await specificWood(id);
    oneItem.result ?
    res.status(404).send({ 
        success: false,
            payload: "/page not found/"}) :
    res.json({ 
        success: true,
            payload: oneItem }) 
});




woodList.post('/', async (req, res) => {
    console.log("GET/ new wood Item")
    const { body } = req;
    const addItem = await createWoodItem(body)
    addItem ? res.json({ 
    success: true, 
            payload: addItem }) :
    res.status(404).send({
        success: false,
            payload: "/page not found/" });
});



woodList.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedItem = await deleteWoodItem(id);
    deletedItem.result
    ? res.status(404).send({ 
        success: false,
            payload: `Invalid ${id}` })
    : res.status(200).json({ 
        success: true,
            payload: deletedItem });
});





woodList.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const updatedItem = await updateWoodItem(body, id);
    updatedItem ? res.json({ 
        success: true, 
                payload: updatedItem }) :
        res.status(404).send({
            success: false,
                payload: "/page not found/" });
    });




module.exports = woodList;