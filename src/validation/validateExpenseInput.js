function validateExpenseInput(body = {}) {
  const errors = {
    title: [],
    amount: [],
    category: []
  };

  const { title, amount, category } = body;

  // helper to add an error for a field
  const addError = (field, message) => {
    if (!errors[field]) errors[field] = [];
    errors[field].push(message);
  };

  // title validation (coerce to string safely)
  if (!title || String(title).trim() === "") {
    addError("title", "Title is required");
  } else {
    // must be a string
    if (typeof title !== "string") addError("title", "Title must be a string");

    // trim and check length
    if (String(title).trim().length < 2)
      addError("title", "Title must be at least 2 characters");
  }

  // amount validation
  if (amount === undefined || amount === null || amount === "") {
    addError("amount", "Amount is required");
  } else {
    const num = Number(amount);
    if (Number.isNaN(num)) {
      addError("amount", "Amount must be a number");
    } else if (num <= 0) {
      addError("amount", "Amount must be greater than 0");
    }
  }

  // ---- Category Validation (optional) ----
  if (category != null && String(category).trim() !== "") {
    if (typeof category !== "string") {
      addError("category", "Category must be a string");
    } else {
      const trimmedCategory = category.trim();
      if (trimmedCategory.length < 2) {
        addError("category", "Category must be at least 2 characters");
      }
    }
  }

  const valid =
    errors.title.length === 0 &&
    errors.amount.length === 0 &&
    errors.category.length === 0;

  return {
    valid,
    errors
  };
}

module.exports = {
  validateExpenseInput
};
