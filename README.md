# Expense Tracker – Backend (Node.js API)

This is the **backend REST API** for the Expense Tracker – Mini Budget App.  
Built with **Node.js** and **Express**, the API manages expenses with validation, routing, and modular structure.  
Data is stored **in-memory** (no database), making it ideal for learning.

---

## 📌 Tech Stack

- **Node.js**
- **Express.js**
- JavaScript (Modules)
- Nodemon (optional for development)

---

## 🚀 Features

- `GET /expenses` – Fetch all expenses  
- - `GET /expenses/category=?` – Filter expenses by category  
- `POST /expenses` – Add a new expense  
- `DELETE /expenses/:id` – Remove an expense  
- Full input validation (title, amount, category, date)  
- Auto-generate unique IDs  
- Calculate totals (server side)  
- Clean modular architecture:
  - Controllers  
  - Routes  
  - Models (store)  
  - Utils  
  - Validation  

---

## 📂 Project Structure

```
BACKEND/
│
├── node_modules/
├── package.json
├── package-lock.json
├── .gitignore
├── server.js          # Starts the HTTP server
├── app.js             # Express app, middleware, routes
│
└── src/
    ├── controllers/
    │   └── expenses.controller.js
    │
    ├── models/
    │   └── expenseStore.js
    │
    ├── routes/
    │   └── expenses.routes.js
    │
    ├── utils/
    │   ├── calculateTotal.js
    │   ├── generateUUID.js
    │   └── httpStatus.js
    │
    └── validation/
        └── validateExpenseInput.js
```

---

## 🌐 API Endpoints

### 1️⃣ GET /expenses  

Fetch all expenses.

**Response example:**

```json
[
  {
    "id": "exp-123",
    "title": "Groceries",
    "amount": 150,
    "category": "food",
    "date": "2025-11-23"
  }
]
```

---

### 2️⃣ POST /expenses  

Create a new expense.

**Body:**

```json
{
  "title": "Taxi",
  "amount": 80,
  "category": "transport",
  "date": "2025-11-24"
}
```

**Validation errors (422):**

```json
{
  "status": 422,
  "errors": {
    "title": ["Title is required"],
    "amount": ["Amount must be a positive number"]
  }
}
```

---

### 3️⃣ DELETE /expenses/:id  

Delete an expense by ID.

**Success:**

```json
{
  "message": "Expense deleted successfully"
}
```

**Not found (404):**

```json
{
  "status": 404,
  "message": "Expense not found"
}
```

---

## ▶️ How to Run the Backend

### 1. Move into the backend folder

```bash
cd BACKEND
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

#### Option A — Normal

```bash
node server.js
```

#### Option B — Nodemon

```bash
npx nodemon server.js
```

### 4. Visit:

```
http://localhost:3000/expenses
```

You can test using browser, Postman or the frontend.

---

## 🔗 Connecting with the Frontend

Frontend should call:

- `GET http://localhost:3000/expenses`
- `POST http://localhost:3000/expenses`
- `DELETE http://localhost:3000/expenses/:id`

 
