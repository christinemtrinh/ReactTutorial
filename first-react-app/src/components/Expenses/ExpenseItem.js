// useState is a function in the React which allows us to identify values that should prompt component function to run again
import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // ISSUE 1: Can only return a single element.. trying to return the following gives an error
  /*
    <div>Date</div>
    <div><h2>Title</h2></div>
    <div>Amount</div>
    */
  // Work around: Wrap everything into a single <div>
  //className is defined by the JSX designers which links the styling

  //-----------------------------------------------------------------------------//

  // ISSUE 2: We want to make our data dynamic rather than hard coded.
  // Use curly braces around the variable name to insert const, or more generally, JS code i.e. {1+1} to display 2
  /* COMMENTED OUT BELOW BECAUSE UNUSED
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  */

  //-----------------------------------------------------------------------------//

  // ISSUE 3: We want to pass in data from a parent component.. We will use parameters to get this. Rename the function to accept an arg.
  // function ExpenseItem() --> ExpenseItem(props)
  // Now can access them using the names specified in calling line: props.title, props.date, props.amount

  //-----------------------------------------------------------------------------//

  // ISSUE 4: We want to listen for events such as click and have the app respond
  // Note that when we call it in the JSX we do NOT use clickHandler() because then it would execute when the JSX is executed which is too early
  // Instead we have React memorize the pointer to execute upon event occurring

  // We will add a React hook (function starting with 'use') which can only be used inside a component function, and not a nested one
  // useState will only grab the default value 'props.title' the first time the component function is run
  // Requires a default value and returns an array: the first value is the variable that will be changed, second is the function that will change the value
  // We use const because the value is not reassigned via "=" operator
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // Despite this change, it isn't reflected on the page.. The var IS changing but the component function isn't reevaluated
    // title = 'Updatd';
    // With useState, call the setting function from the click handler. ALSO change the value displayed in the JSX to 'title' instead of 'props.title' 
    // ! Each ExpenseItem (component instance) gets an independent state managed by React
    setTitle('Updated!');
    // The console actually logs the old value in this case. This is because the setting function actually schedules for the value to change. It doesn't happen right away as the code executes.
    // Eventually, the component is rerendered, and the console should reflect the new value of the variable 
    console.log(title);
  };

  
  console.log(props.date);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
