import { addUser, deleteUser, updateUser } from '../actions/user-actions';
import userReducer from './user-reducer';

describe('user-reducer', () => {
  it('should return default state', () => {
    const initialState = undefined;
    const action = { type: 'an action' };

    const expectedState = {};
    const actualState = userReducer(initialState, action);

    expect(actualState).toEqual(expectedState)
  });
  it('should add new user', () => {
    const initialState = undefined;
    const action = addUser({id: 'abc12', name: 'John Doe', email: 'world@test.com'});

    const expectedState = { 'abc12': {id: 'abc12', name: 'John Doe', email: 'world@test.com'}};
    const actualState = userReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should update user by id', () => {
    const initialState = {'abc12': {id: 'abc12', name: 'John Doe', email: 'world@test.com'}};
    const action = updateUser('abc12',{id: 'abc12', name: 'John Doe', email: 'world@test.com'});

    const expectedState = { 'abc12': {id: 'abc12', name: 'John Doe', email: 'world@test.com'}};
    const actualState = userReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should delete user by id', () => {
    const initialState = {'abc12': {id: 'abc12', name: 'John Doe', email: 'world@test.com'}};
    const action = deleteUser('abc12');

    const expectedState = {}
    const actualState = userReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  })
});

