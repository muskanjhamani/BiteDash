const express = require("express");
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        // console.log(global.foodCategory);
        res.send([global.food_items,global.foodCategory])
    } catch (err) {
        console.log(err.message);
        res.send("Server Error");
    }
})

module.exports = router;