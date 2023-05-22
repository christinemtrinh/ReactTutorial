// We define a wrapper component called card to contain the list of expenses and clean up the CSS files and other HTML to keep components clean. 
// This wrapper is very simple and contains only one div (wrapper seems useless), but modals and alerts may have more complex JSX structure.
// However, because we have a custom component called Card instead of div returned in ExpenseItem.js, we need to specify the children should be displayed, "props.children".
// When we did this, the CSS styling was lost for ExpenseItem and Expenses
//  We need to define classes which specify which classNames to look at. 
//  In this example classes = 'card expense-item'. None other is needed because the styling of the description and price is handled by props.children.

import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className; 
    return (
        <div className={classes}>{props.children}</div>
    );
};

export default Card;