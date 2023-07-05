import React from 'react';

import Chart from '../Chart/Chart';

const ExpenseChart = (props) => {

    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sept', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    // This loop will go through each expense of the filtered year and update the value counts for the chart 
    // Because we are iterating through array and not an object use 'of' rather than 'in' for for-loops
    for (const expense of props.expenses ) {
        const expenseMonth = expense.date.getMonth(); // treats Jan as 0
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return (
        <Chart dataPoints={chartDataPoints}></Chart>
    );

}

export default ExpenseChart;