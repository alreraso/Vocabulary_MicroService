const express = require('express');
const router = express.Router();

const  {findAll, addCategory, deleteCategory, findByLevel, findByName, updateC}= require ('../controllers/categoryController');

router.get('/AllCategories', (req, res) => findAll(req,res))
    .post('/newCategory', (req, res) => addCategory(req, res))
    .get('/category', (req, res) => findByName(req, res))
    .get('/levelCategory', (req, res) => findByLevel(req, res))
    .put('/updateCategory', (req, res) => updateC(req, res))
    .delete('/deleteCategory', (req, res) => deleteCategory(req, res));

module.exports = router;
