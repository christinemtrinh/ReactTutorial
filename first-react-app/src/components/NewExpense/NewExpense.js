import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {

  const [addingNew, setAddingNew] = useState(false);

  const submitExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onSaveNewExpense(expenseData);
    // It makes most logical sense to close the form after a submission has been made
    // We do it at this level and not the ExpenseForm because of the availability of functions and flow of logic.
    // We close it after all ahas been saved
    setAddingNew(false);
  };

  const addButtonHandler = () => {
    setAddingNew(true);
  };

  const cancelButtonHandler = () => {
    setAddingNew(false);
  };
  return (
    <div className="new-expense">
      {!addingNew && <button onClick={addButtonHandler}>Add Expense</button>}
      {addingNew && <ExpenseForm onSubmitExpense={submitExpenseHandler} onCancel={cancelButtonHandler}/>}
    </div>
  );
};

export default NewExpense;
