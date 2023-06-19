import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  // We have brought the data from ExpenseForm up to here, we need to lift the state up
  // to the lowest component of the tree that has both data generator and data user
  // We are updating our state via previous snapshot, so we should use the previous state 'prevExpenses'
  // accessible inside the set function 'setExpenses' parameter via arrow function
  const saveNewExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  // Adding new items to the array gets tricky
  // Default behavior is to recopy the entire array since everything is the same.. rerendering is triggered by change in length of list
  // Besides performance concerns, we might lose some individual state data of the array item
  // key props (see Expenses.js) are used to tell React where the new item has been entered

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onSaveNewExpense={saveNewExpenseHandler} />
      <Expenses expenseList={expenses} />
    </div>
  );
}

export default App;
