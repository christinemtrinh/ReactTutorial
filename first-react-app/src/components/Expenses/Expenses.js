import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {

  const [filterYear, setFilterYear] = useState("2022");
  const filterChangeHandler = (year) => {
    setFilterYear(year);
    console.log(filterYear);
  };

  const expensesToShow = props.expenseList.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  // Can render content (not just lists) conditionally via JSX
  // Cannot use long statements like if and for; use ternary expression
  //   {expensesToShow.length === 0 ? (<p>No expenses found.</p>) : (expensesToShow.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  // )))}

  // Can also use && operator, JS checks the first condition and returns the rest if true

  // Cleanest way to do it is to take care of it before the return statement, like so
  // let expenseContent = <p>No expenses found.</p>;
  // if (expensesToShow.length > 0) {
  //   expenseContent = expensesToShow.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  // ))
  // }

  // We will move it to a new component called ExpenseList
  return (
    <Card className="expenses">
      <ExpensesFilter onFilterSelect={filterChangeHandler}></ExpensesFilter>
      <ExpenseList items={expensesToShow}/>
    </Card>
  );
};

export default Expenses;
