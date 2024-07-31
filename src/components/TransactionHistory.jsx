import React from "react";
import { Transaction } from "./Transaction";

export const TransactionHistory = ({ transactions, setTransactions }) => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-3 flex-column">
      <h1
        className="text-center"
        style={{ borderBottom: "3px solid #ccc", width: "70vw" }}
      >
        Transaction History
      </h1>
      {transactions.map((transaction, idx) => {
        return <Transaction key={idx} transaction={transaction} />;
      })}
    </div>
  );
};
