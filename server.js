// server.js
const app = require('./src/app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Expense Tracker API running on http://localhost:${PORT}`);
});