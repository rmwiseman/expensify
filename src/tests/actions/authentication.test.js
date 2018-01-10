import { login, logout } from '../../actions/authentication';

test('should set up log in action object', () => {
  const uid = 'my-lengthy-uid-string';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should set up log out action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});