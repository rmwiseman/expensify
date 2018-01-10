import authReducer from '../../reducers/authentication';

test('should set uid on log in', () => {
  const uid = 'my-lengthy-uid-string';
  const action = {
    type: 'LOGIN',
    uid
  };
  const defaultState = {};
  const state = authReducer(defaultState, action);
  expect(state).toEqual({ uid });
});

test('should clear uid on log out', () => {
  const action = {
    type: 'LOGOUT'
  };
  const defaultState = {};
  const state = authReducer(defaultState, action);
  expect(state).toEqual({});
});