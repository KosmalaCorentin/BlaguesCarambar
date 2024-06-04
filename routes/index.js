const express = require('express');
const controllerBlague = require('../controllers');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({ success: 'RACINE API' });
});

router.get('/test', (req, res) => {
    res.status(200).json({ message: 'test' });
});

router.get('/random',controllerBlague.random );
router.get('/blagues/all', controllerBlague.findAll);
router.get('/blague/:id', controllerBlague.findByID);
router.get('/blague', controllerBlague.random);

module.exports = router;