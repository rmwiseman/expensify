import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => (
  <div>
  <h1>Showing {expenseCount} expense{expenseCount == 1 || 's'} totalling &pound;{
    numeral(expensesTotal/100).format('0,0.00')
  }</h1>
  </div>
);

const mapStateToProps = (state) => {
  const expenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: expenses.length,
    expensesTotal: totalExpenses(expenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary); // weird API!