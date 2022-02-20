const express = require("express");

const toys = express.Router();

const {
    getAllToys,
    specificToy,
    createToy,
    deleteToy,
    updateToys,
} = require("../queries/toys");



toys.get('/', async (req, res) => {
    console.log("GET / from wood_list")
    const allToys = await getAllToys();
    allToys ? 
    res.json({ 
        success: true,
            payload: allToys}) : 
    res.status(404).send({ 
        success: false,
            payload: "/page not found/"});
});




toys.get('/:id', async (req, res) => {
    const { id } = req.params;
    console.log("GET /:id from Toys");
    const oneItem = await specificToy(id);
    oneItem.result ?
    res.status(404).send({ 
        success: false,
            payload: "/page not found/"}) :
    res.json({ 
        success: true,
            payload: oneItem }) 
});




toys.post('/', async (req, res) => {
    console.log("GET/ new toy")
    const { body } = req;
    const addItem = await createToy(body)
    addItem ? res.json({ 
    success: true, 
            payload: addItem }) :
    res.status(404).send({
        success: false,
            payload: "/page not found/" });
});



toys.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedItem = await deleteToy(id);
    deletedItem.result
    ? res.status(404).send({ 
        success: false,
            payload: `Invalid ${id}` })
    : res.status(200).json({ 
        success: true,
            payload: deletedItem });
});





toys.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const updatedItem = await updateToys(body, id);
    updatedItem ? res.json({ 
        success: true, 
                payload: updatedItem }) :
        res.status(404).send({
            success: false,
                payload: "/page not found/" });
    });




module.exports = toys;