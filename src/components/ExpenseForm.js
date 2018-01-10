import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

//const now = moment();
//console.log(now.format('D MMM YYYY'));

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: moment(props.expense ? props.expense.createdAt : undefined),
      calendarFocused: false,
      error: undefined
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  amountPtrn = /^\d+(?:\.\d{0,2})?$/;
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || this.amountPtrn.test(amount)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    createdAt && this.setState(() => ({ createdAt }));
  };
  onCalendarFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide a description and an amount.' }));
    } else {
      this.setState(() => ({ error: undefined }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          className="text-input"
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          className="text-input"
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onCalendarFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className="textarea"
          placeholder="Add a note for expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button">{this.props.expense ? 'Save Changes' : 'Add Expense'}</button>
        </div>
      </form>
    );
  }
}