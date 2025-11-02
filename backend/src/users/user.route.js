const express = require('express')
const User =require('./user.model');
const jwt = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET_KEY
router.post("/admin",async (req,res) =>{
    const {usernaem,password} = req.body;

    try {
        
        const admin = await User.findOne({username});
        if(!admin){
            res.status(404).send({message:"Admin not found"})
        }

        if(username.password !== admin.password){
            res.status(401).send({message:"Invalid passwlrd"});
        }

        const token = jwt.sign({id:admin._id,username:admin.username,role:admin.role},JWT_SECRET,{expiresIn:"1h"})
    } catch (error) {
        console.error("failed to login");
        res.status(401).send('failed')
    }
})
module.exports = router;