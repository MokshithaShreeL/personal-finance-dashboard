import { useEffect, useState } from "react";
import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");

    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [
      transaction,
      ...prevTransactions,
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter(
        (transaction) => transaction.id !== id
      )
    );
  };

  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const balance = income - expense;

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">₹</div>

          <div>
            <span className="eyebrow">Personal finance</span>
            <strong>MoneyBoard</strong>
          </div>
        </div>

        <span className="status-pill">
          <span></span>
          Finance Dashboard
        </span>
      </header>

      <main>
        <section className="intro">
          <div>
            <span className="eyebrow">Manage your money</span>

            <h1>
              Make every rupee count<span>.</span>
            </h1>

            <p>
              Track your income, manage your expenses, and keep
              your financial goals in sight.
            </p>
          </div>

          <div className="intro-note">
            <span className="note-icon">+</span>

            <div>
              <strong>Quick tip</strong>
              <br />
              Add every transaction to get an accurate balance.
            </div>
          </div>
        </section>

        <SummaryCards
          income={income}
          expense={expense}
          balance={balance}
        />

        <div className="workspace-grid">
          <section className="calculator-panel">
            <div className="panel-heading">
              <div>
                <span className="step-label">Step 01</span>
                <h2>Add transaction</h2>
              </div>

              <span className="subject-counter">
                {transactions.length} transactions
              </span>
            </div>

            <TransactionForm
              onAddTransaction={addTransaction}
            />
          </section>

          <section className="transactions-panel">
            <TransactionList
              transactions={transactions}
              onDelete={deleteTransaction}
            />
          </section>
        </div>
      </main>

      <footer>
        MoneyBoard <span>·</span> A clearer view of your finances
      </footer>
    </div>
  );
}

export default App;