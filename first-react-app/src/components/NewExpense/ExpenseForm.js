import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  // we also need to add event listener here for detecting user input
  // we could use onInput, but onChange is more inclusive to dropdowns, etc.
  // Event listeners through React provide an object called event which has properties we can use
  // We are interested in SyntheticBaseEvent > target > input > value

  // We need a way to make sure the values are protected if the component function were to be run again or smth
  // Multiple states are allowed and act independently as slices of the component's full state
  // Alternatively, we can maintain a single state that handles a full object of multiple properties
  /*
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    }); 
    Don't forget to not lose other data.. copy when updating state
    Notice that updating the state depends on the previous state: so do not call it like below
    setUserInput({
        ...userInput,   <--- Spread operator
        enteredTitle: event.target.value,
    });
    Instead (because of scheduling to guarantee it uses the latest state:
    setUserInput((prevState) => {
        return {...prevState, enteredTitle: event.target.value}
    });
  */

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  
  // Though we don't use these functions to have a change of value reflected on the screen, it is still needed.
  // These functions are important because we want to preserve the state in case of any other changes

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
