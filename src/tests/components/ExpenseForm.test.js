import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import { wrap } from 'module';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').simulate('submit', { preventDefault: () => { } });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'New description';
  wrapper.find('input').at(0).simulate('change', { target: { value } });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'New note';
  wrapper.find('textarea').simulate('change', { target: { value } });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount on valid input', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = '11.11';
  wrapper.find('input').at(1).simulate('change', { target: { value }});
  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on invalid input', () => {
  const wrapper = shallow(<ExpenseForm />);
  //const oldValue = wrapper.find('input').at(1).value
  const value = '11.11.';
  wrapper.find('input').at(1).simulate('change', { target: { value }});
  expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', { preventDefault: () => { } });
  expect(wrapper.state('error')).toBe(undefined);
  expect(onSubmitSpy).toHaveBeenLastCalledWith({ ...expenses[0], id: undefined });
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendarFocussed on change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const focused = true;
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});