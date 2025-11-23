const { generateUUID } = require("../utils/generateUUID");

let expenses = []; 
function getAllExpenses(){
    return expenses;
} 
function getAllExpensesByCategory(category){
    return expenses.filter(expense => expense.category === category);
}

function addExpense({ title, amount, category, date }) {
    const uuid = generateUUID(title);
    const newExpense = {
        id: uuid,
        title,
        amount,
        category: category || 'uncategorized',
        date: date ? new Date(date) : new Date(),
    };
    expenses = [...expenses, newExpense];
    return newExpense;
}

function findExpenseById(id) {
  return expenses.find((expense) => expense.id === id);
} 
function deleteExpenseById(id) {
  const existing = findExpenseById(id);
  if (!existing) return null;

  expenses = expenses.filter((expense) => expense.id !== id);
  return existing;
}

module.exports = {
    getAllExpenses,
    getAllExpensesByCategory,
    addExpense,
    findExpenseById,
    deleteExpenseById,
}