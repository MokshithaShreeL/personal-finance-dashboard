function SummaryCards({ income, expense, balance }) {
  return (
    <div className="summary-grid">
      <div className="summary-card income-card">
        <span>Total Income</span>
        <h2>₹{income.toFixed(2)}</h2>
      </div>

      <div className="summary-card expense-card">
        <span>Total Expense</span>
        <h2>₹{expense.toFixed(2)}</h2>
      </div>

      <div className="summary-card balance-card">
        <span>Balance</span>
        <h2>₹{balance.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default SummaryCards;