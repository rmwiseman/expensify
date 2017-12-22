import { createStore } from 'redux';

// const add = ({ a, b }) => a + b;
// console.log(add({ a: 12, b: 1}));
// prints 13

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// Recucers
// 1. They're pure functions, so only depend upon the inputs and don't change stuff outside its scope.
// 2. They never change state or action.

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incBy
      };
    case 'DECREMENT':
      const decBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

//unsubscribe();

store.dispatch(decrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 123 }));

store.dispatch(resetCount());
