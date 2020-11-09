const express = require('express');
const router = express.Router();

const  {findAll, addWord, deleteWord, findByCategory, findByWord, updateW}= require ('../controllers/wordsController');

router.get('/AllWords', (req, res) => findAll(req,res))
    .post('/newWord', (req, res) => addWord(req, res))
    .get('/word/:name', (req, res) => findByWord(req, res))
    .get('/categoryWord/:category', (req, res) => findByCategory(req, res))
    .put('/updateWord', (req, res) => updateW(req, res))
    .delete('/deleteWord', (req, res) => deleteWord(req, res));

module.exports = router;
