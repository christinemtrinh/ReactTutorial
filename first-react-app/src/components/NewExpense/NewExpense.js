import React from "react";

import ExpenseForm from './ExpenseForm';

import "./NewExpense.css";

const NewExpense = (props) => {
  const submitExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onSaveNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
        <ExpenseForm onSubmitExpense={submitExpenseHandler}/>
    </div>
  );
};

export default NewExpense;
