const express = require('express')
const router = express.Router();
const userSchema = require('../models/userSchema')
//find
router.get('/', async (req, res) => {
    var users = await userSchema.find();
    res.send(users);
});
//find by id
router.get('/:id', async (req, res) => {
    const userFind = await userSchema.findById(req.params.id);
    if (!userFind) {
        res.status(404).json({message : 'nest pas connus'});

    }
    else {
        res.send(userFind);
    }
});
//post
router.post('/', async (req, res) => {
    const user = await userSchema.create(req.body);
    res.send(user)
});
//put
router.put('/:id', async (req, res) => {
    const userFind = await userSchema.findById(req.params.id);
    if (!userFind) {
        res.status(404).json({message : 'nest pas connus'});
    }
    else {
      const  userUpdate = await userSchema.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.send(userFind);
    }
});
//delete
router.delete('/:id', async (req, res) => {
    const userFind = await userSchema.findById(req.params.id);
    if (!userFind) {
        res.status(404).json({message : 'nest pas connus'});
    }
    else {
       const userDelete = await userSchema.deleteOne({ _id: req.params.id })
        res.status(200).json({message: 'todo deleted sucessfully'})
    }
});

module.exports = router;