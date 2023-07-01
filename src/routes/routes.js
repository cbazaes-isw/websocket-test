const express = require('express');

const logger = require('../middlewares/logger');

const router = express.Router();

router.get('/', [ logger ], (req, res) => {
    res.send('Hola mundo!');
});

module.exports = router;