const db = require("../db/dbConfig");

const getAllToys = async () => {
    try {
const allToys = await db.any("SELECT * FROM toys");
console.log(allToys)
return allToys;
    } catch (err) {
        console.log(err)
        return err;
    }
}




const specificToy = async (id) => {
    try {
const oneToy= await db.one("SELECT * FROM toys WHERE id=$1", id);
return oneToy
    } catch (err){
        console.log(err)
        return err;
    }
}




const createToy = async (toysObj) => {
    const { name, description, price, category, type, is_available, image } = toysObj; 
    try {
const createdItem = await db.one(
    "INSERT INTO toys (name, description, price, category, type,  is_available, image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [name, description, price, category, type, is_available, image]);

    if (createdItem.image === null){
    createdItem.image = 'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image'
    }

return createdItem
    } catch (err){
        console.log(err)
        return err;
    }
};





const deleteToy = async (id) => {
    try {
    const deletedItem = await db.one(
      "DELETE FROM toys WHERE id=$1 RETURNING *", id);
    return deletedItem;
    } catch (err) {
    return err;
    }
};





const updateToys = async (toysObj, id) => {
    const { name, description, price, category, type, is_available, image } = toysObj;
    try {
    const updatedItem = await db.one(
      "UPDATE toys SET name=$2, description=$3, price=$4, category=$5, type=$6, is_available=$7, image=$8 WHERE id=$1 RETURNING *",
    [id, name, description, price, category, type, is_available, image]
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
    getAllToys,
    specificToy,
    createToy,
    deleteToy,
    updateToys
}