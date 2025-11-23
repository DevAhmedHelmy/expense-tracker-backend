const {
  getAllExpenses,
  getAllExpensesByCategory
} = require("../models/expenseStore");
const { validateExpenseInput } = require("../validation/expenseValidation");
const STATUS = require("../utils/httpStatus");

function getExpenses(req, res) {
  const { category } = req.query;
  let expenses = category ? getAllExpensesByCategory() : getAllExpenses();

  let total = calculateTotal(expenses);

  res.status(STATUS.OK).json({ data: expenses, total });
}

function createExpense(req, res) {
  const validation = validateExpenseInput(req.body);

  if (!validation.valid) {
    return res.status(STATUS.VALIDATION_ERROR).json({
      status: "error",
      message: "Validation failed",
      errors: validation.errors
    });
  }
  const { title, amount, category, date } = req.body;
  const newExpense = addExpense({ title, amount, category, date });

  res.status(STATUS.CREATED).json(newExpense);
}

function getExpenseById(id) {
    const id = Number(req.params.id);
    const expense = findExpenseById(id);
    res.status(STATUS.OK).json(expense);
}

// DELETE /expenses/:id
function deleteExpense(req, res) {
  const id = Number(req.params.id);

  const deleted = deleteExpenseById(id);

  if (!deleted) {
    return res.status(STATUS.NOT_FOUND).json({ message: "Expense not found" });
  }

  res.status(STATUS.OK).json({
    message: "Expense deleted",
    deleted
  });
}

// GET /expenses/highest
function getHighestExpense(req, res) {
  const allExpenses = getAllExpenses();

  if (allExpenses.length === 0) {
    return res.status(STATUS.OK).json({
      message: "No expenses yet",
      maxAmount: 0,
      highestExpenses: []
    });
  }

  // map to get amounts
  const amounts = allExpenses.map((expense) => expense.amount);
  const maxAmount = Math.max(...amounts);

  const highestExpenses = allExpenses.filter(
    (expense) => expense.amount === maxAmount
  );

  res.status(STATUS.OK).json({
    maxAmount,
    highestExpenses
  });
}

module.exports = {
  getExpenses,
  createExpense,
  deleteExpense,
  getHighestExpense
};
