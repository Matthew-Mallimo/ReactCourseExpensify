import React from 'react';
import { connect } from 'react-redux';
import getTotalExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpenseSummary = (props) => {
    const expenses = props.expenses;
    const expenseLength = props.expenses.length;
    const totalFormatted = numeral(getTotalExpenses(expenses)/100).format('$0,0.00');
    return (
        <div>
            <h3>Viewing {expenseLength} {expenseLength > 1 ? 'expenses' : 'expense'} totalling {totalFormatted}</h3>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
      expenses: selectExpenses(state.expenses, state.filters)
    };
  };
  
 export default connect(mapStateToProps)(ExpenseSummary);