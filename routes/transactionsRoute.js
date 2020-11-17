const express = require('express');
const { getTransactions, addTransactions, deleteTransactions } = require('../controllers/transactionController')
const router = express.Router()

router.route('/').get(getTransactions).post(addTransactions);
router.route('/:id').delete(deleteTransactions);

module.exports = router;