import { addUser, deleteUser, updateUser } from '../actions/user-actions';
import userReducer from './user-reducer';
import { USER } from "../actions/types";

describe('user-reducer', () => {
  it('should return default state', () => {
    const initialState = undefined;
    const action = { type: 'an action' };

    const expectedState = {};
    const actualState = userReducer(initialState, action);

    expect(actualState).toEqual(expectedState)
  });
  it('should add new user', () => {
    const user = {'abc12': {id: 'abc12', name: 'John Doe', email: 'world@test.com'}};
    const expectedState = {
      type: USER.ADD_USER,
      payload: { user }
    };
    expect(addUser(user)).toEqual(expectedState);
  });

  it('should update user by id', () => {
    const user = {'abc12': {id: 'abc12', name: 'John Doe', email: 'world@test.com'}};
    const expectedState = {
      type: USER.UPDATE_USER,
      payload:  { id: 'abc12', user }
    }
    expect(updateUser('abc12', user))
      .toEqual(expectedState);
  });

  it('should delete user by id', () => {
    const expectedState = {
      type: USER.DELETE_USER,
      payload:  { id: 'abc12' }
    }
    expect(deleteUser('abc12')).toEqual(expectedState);
  })
});

