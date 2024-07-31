import React from "react";
import { useState } from "react";

export const TransactionForm = ({
  transactions,
  setTransactions,
  setBalance,
}) => {
  const [titleValue, setTitleValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="title"
          value={titleValue}
          onChange={(e) => {
            setTitleValue(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="amount"
          value={amountValue}
          onChange={(e) => {
            setAmountValue(parseInt(e.target.value));
          }}
        />
        <button
          onClick={() => {
            setTransactions([
              ...transactions,
              {
                title: titleValue,
                amount: amountValue,
              },
            ]);
            setBalance((balance) => balance + amountValue);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
