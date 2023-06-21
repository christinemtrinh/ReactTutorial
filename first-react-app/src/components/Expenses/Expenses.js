import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

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

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterSelect={filterChangeHandler}></ExpensesFilter>
      {expensesToShow.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      )}
    </Card>
  );
};

export default Expenses;
