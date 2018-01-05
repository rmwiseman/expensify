import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render expenses summary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123.45} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render expenses summary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={78} expensesTotal={1234.56} />);
  expect(wrapper).toMatchSnapshot();
});