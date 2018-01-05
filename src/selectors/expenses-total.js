const reducer = (acc, curr) => acc + curr.amount;

const selectExpensesTotal = (expenses) => expenses.reduce(reducer, 0);

export default selectExpensesTotal;