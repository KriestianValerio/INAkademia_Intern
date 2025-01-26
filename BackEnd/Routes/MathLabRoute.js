const express = require('express');


const router = express.Router();

const MathLabReg = require("../Models/MathLab");

const checkEmailExists = async (email) => {
    const existingUser = await MathLabReg.findOne({ email });
    return existingUser !== null;
};

router.post('/', async (req, res) => {
    try {
        const email = req.body.email;
        const emailExists = await checkEmailExists(email);
        if (emailExists) {
            return res.status(555).send("Email already exists");
        }
        console.log('Request Body:', req.body); 
        let mathlab = new MathLabReg(req.body);
        await mathlab.save();
        res.status(200).send("Registration Accepted");
        console.log('submitted');
    } catch (error) {
        console.log('Error:', error); // Log error
        res.status(400).send(error.message || error);
    }
});

module.exports = router;