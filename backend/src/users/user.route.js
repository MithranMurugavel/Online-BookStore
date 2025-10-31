const express = require('express')

const router = express.Router();

router.post("/admin",async (req,res) =>{
    const {usernaem,password} = req.body;

    try {
        
        const admin = await User.findOne({username})
    } catch (error) {
        console.error("failed to login");
        res.status(401).send('failed')
    }
})
module.exports = router;