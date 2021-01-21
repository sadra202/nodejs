const express = require('express')
const router = express.Router();
const todoSchema = require('../models/todoSchema')
//find
router.get('/', async (req, res) => {
    var todos = await todoSchema.find();
    res.send(todos);
});
//find by id
router.get('/:id', async (req, res) => {
    const todoFind = await todoSchema.findById(req.params.id);
    if (!todoFind) {
        res.status(404).json({message : 'nest pas connus'});

    }
    else {
        res.send(todoFind);
    }
});
//post
router.post('/', async (req, res) => {
    const todo = await todoSchema.create(req.body);
    res.send(todo)
});
//put
router.put('/:id', async (req, res) => {
    const todoFind = await todoSchema.findById(req.params.id);
    if (!todoFind) {
        res.status(404).json({message : 'nest pas connus'});
    }
    else {
       const todoUpdated = await todoSchema.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.send(todoUpdated);
    }
});
//delete
router.delete('/:id', async (req, res) => {
    const todoFind = await todoSchema.findById(req.params.id);
    if (!todoFind) {
        res.status(404).json({message : 'nest pas connus'});
    }
    else {
      const  todoDelete = await todoSchema.deleteOne({ _id: req.params.id })
        res.status(200).json({message: 'todo deleted sucessfully'})
    }
});

module.exports = router;