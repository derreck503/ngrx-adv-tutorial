import * as authActions from '../actions/auth.actions';

export interface State {
  userName?: string;
  friendlyName?: string;
}

export const initialState: State = {
  userName: null,
  friendlyName: null
};

export function reducer(
  state = initialState,
  action: authActions.AuthActions
): State {
  switch (action.type) {
    case authActions.AuthActionTypes.SetAuths:
      return {
        ...state,
        userName: action.payload.userName,
        friendlyName: action.payload.friendlyName
      };
    default:
      return state;
  }
}

export const getUserName = (state: State) => state.userName;
export const getFriendlyName = (state: State) => state.friendlyName;
