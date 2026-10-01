function TransactionList({ transactions, onDelete }) {
  return (
    <div className="transaction-list">
      <h2>Recent Transactions</h2>

      {transactions.length === 0 ? (
        <p className="empty-message">No transactions yet.</p>
      ) : (
        transactions.map((transaction) => (
          <div className="transaction-item" key={transaction.id}>
            <div>
              <h3>{transaction.title}</h3>
              <p>
                {transaction.category} • {transaction.date}
              </p>
            </div>

            <div className="transaction-right">
              <strong className={transaction.type}>
                {transaction.type === "income" ? "+" : "-"}₹
                {transaction.amount.toFixed(2)}
              </strong>

              <button onClick={() => onDelete(transaction.id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TransactionList;