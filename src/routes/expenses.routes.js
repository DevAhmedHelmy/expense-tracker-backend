// src/routes/expenses.routes.js
const express = require('express');
const {
  getExpenses,
  createExpense,
  deleteExpense,
  getHighestExpense,
} = require('../controllers/expenses.controller');

const router = express.Router();

// GET /expenses  (+ filter by ?category=)
router.get('/', getExpenses);

// POST /expenses
router.post('/', createExpense);

// GET /expenses/:id
router.get('/:id', getExpenseById);

// DELETE /expenses/:id
router.delete('/:id', deleteExpense);

// GET /expenses/highest  (optional)
router.get('/highest', getHighestExpense);

module.exports = router;
