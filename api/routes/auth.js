const router = require('express').Router();
const User = require('../model/User.model');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const userExists = await User.findOne({email: req.body.email});

    if(userExists) {
        console.log(userExists)
        return res.status(400).send('User already exists')
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try{ 
        const savedUser = await user.save();
        res.send({name: savedUser.name, email: savedUser.email});
        console.log('user saved');
    } catch(err){
        res.status(400).send(err)
    }

});


router.post('/login', async (req, res) => {
    


})


module.exports = router;
