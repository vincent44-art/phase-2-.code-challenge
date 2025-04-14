import React from 'react';

const ExpenseTable = ({ expenses, deleteExpense }) => {
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US');
  };

  return (
    <div className="expense-table-container">
      <table className="expense-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="5" className="no-expenses">No expenses found.</td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.date ? formatDate(expense.date) : 'N/A'}</td>
                <td>{expense.description}</td>
                <td>${parseFloat(expense.amount).toFixed(2)}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteExpense(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;