const express = require('express');
const expensesRouter = require('./routes/expenses.routes');

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/expenses', expensesRouter);

module.exports = app;