// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions = (req, res, next) => {
    res.status(200).send('Hello')
}

// @desc    Add transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.addTransactions = (req, res, next) => {
    res.status(200).send('Add Transaction')
}

// @desc    Delete transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.deleteTransactions = (req, res, next) => {
    res.status(200).send('Delete Transaction')
}