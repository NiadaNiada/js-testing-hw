// import { addUser, deleteUser, updateUser } from '../actions/user-actions';

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
  });

  it('should update user by id', () => {
  });

  it('should delete user by id', () => {
  })
});
