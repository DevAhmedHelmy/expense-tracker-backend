
function calculateTotal(expenses) {
  let sum = 0;

  // using forEach
  expenses.forEach((expense) => {
    sum += expense.amount;
  });

  return sum;
}
module.exports = calculateTotal;