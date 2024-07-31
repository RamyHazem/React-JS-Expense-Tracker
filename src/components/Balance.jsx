import React, { useState } from "react";
import { formatBalance } from "../utils/formatBalance";
import "../index.css";

export const Balance = ({ balance }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-4 gap-2">
      <h1>Your Balance: </h1>
      <h1 className={`${balance > 0 ? "green" : "red"} `}>
        {formatBalance(balance)}
      </h1>
    </div>
  );
};
