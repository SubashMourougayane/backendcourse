const express = require('express')
const router = express.Router();

const arithmeticOperation = require('./arithmeticoperation')


router.use('/arithmetic-operation', arithmeticOperation)


module.exports = router;