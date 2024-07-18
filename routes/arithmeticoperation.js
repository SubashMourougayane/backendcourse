const express = require('express')
const router = express.Router();
const arithmeticOperationController = require('../controller/arithmeticOperator')

router.post('/add', arithmeticOperationController.add )
router.post('/subtract', arithmeticOperationController.subtract)



module.exports = router