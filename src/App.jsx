import { useState } from "react";
import { Button } from "react-bootstrap";
import { Balance } from "./components/Balance";
import { TransactionForm } from "./components/TransactionForm";
import { TransactionHistory } from "./components/TransactionHistory";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  return (
    <div>
      <h1 className="text-center mt-4 fs-lg">Expense Tracker</h1>
      <Balance balance={balance} />
      <div className="text-center mt-3">
        <TransactionForm
          transactions={transactions}
          setTransactions={setTransactions}
          setBalance={setBalance}
        />
      </div>
      <TransactionHistory
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </div>
  );
}

export default App;
