import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    description: 'New expense',
    amount: 12345,
    note: '',
    createdAt: moment().valueOf()
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const updates = {
    amount: 110000
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    expenses[0],
    {
      ...expenses[1],
      ...updates
    },
    expenses[2]
  ]);
});

test('should not edit an expense if id not found', () => {
  const updates = {
    amount: 110000
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});