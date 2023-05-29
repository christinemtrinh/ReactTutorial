import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  // We want to render the list dynamically, rather than hard code the numbr of elements
  // We will use JS to do so, React is capable of rendering JSX elements

  const [filterYear, setFilterYear] = useState("2022");
  const filterChangeHandler = (year) => {
    setFilterYear(year);
    console.log(filterYear);
  };

  const expensesToShow = props.expenseList.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterSelect={filterChangeHandler}></ExpensesFilter>
      {expensesToShow.map(
        (
          expense //Notice the {} around the entire map function
        ) => (
          <ExpenseItem //Notice map accepts a function as the arg
            key={expense.id} //Key should be a unique id
            title={expense.title} //Notice the () instead of {} around the arrow function body
            amount={expense.amount}
            date={expense.date}
          />
        )
      )}
    </Card>
  );
};

export default Expenses;
