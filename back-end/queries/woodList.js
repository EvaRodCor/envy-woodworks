const db = require("../db/dbConfig");

const getAllWood = async () => {
    try {
const allWood = await db.any("SELECT * FROM wood_types");
console.log(allWood)
return allWood;
    } catch (err) {
        console.log(err)
        return err;
    }
}




const specificWood = async (id) => {
    try {
const oneItem = await db.one("SELECT * FROM wood_types WHERE id=$1", id);
return oneItem
    } catch (err){
        console.log(err)
        return err;
    }
}




const createWoodItem = async (woodObj) => {
    const { name, description, is_available, price, lengths, image } = woodObj; 
    try {
const createdItem = await db.one(
    "INSERT INTO wood_types (name, description, is_available, price, lengths, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [name, description, is_available, price, lengths, image]);

    if (createdItem.image === null){
    createdItem.image = 'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image'
    }

return createdItem
    } catch (err){
        console.log(err)
        return err;
    }
};





const deleteWoodItem = async (id) => {
    try {
    const deletedItem = await db.one(
      "DELETE FROM wood_types WHERE id=$1 RETURNING *", id);
    return deletedItem;
    } catch (err) {
    return err;
    }
};





const updateWoodItem = async (woodObj, id) => {
    const { name, description, is_available, price, lengths, image } = woodObj;
    try {
    const updatedItem = await db.one(
      "UPDATE wood_types SET name=$2, description=$3, is_available=$4, price=$5, lengths=$6, image=$7 WHERE id=$1 RETURNING *",
    [id, name, description, is_available, price, lengths, image]
    );

    if (updatedItem.image === null){
        updatedItem.image = 'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image'
        }

    return updatedItem;
    } catch (err) {
    console.log(err)
    return err;
    }
};





module.exports = {
    getAllWood,
    specificWood,
    createWoodItem,
    deleteWoodItem,
    updateWoodItem,
}