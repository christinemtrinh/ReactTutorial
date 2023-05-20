import './ExpenseItem.css';

function ExpenseItem(props) {
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
  return (
    <div className="expense-item">  
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
