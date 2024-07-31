import React from "react";
import { formatBalance } from "../utils/formatBalance";

export const Transaction = ({ transaction }) => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>{transaction.title}</h4>
        <p className={`${transaction.amount > 0 ? "green" : "red"} `}>
          {formatBalance(transaction.amount)}
        </p>
      </div>
    </div>
  );
};
