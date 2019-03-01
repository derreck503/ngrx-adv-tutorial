import { ShipsActions, ShipsActionTypes } from '../actions/ships.actions';
import { StarShip } from '../../models/star-ships.model';

export interface State {
  allShips: StarShip[];
}

export const initialState: State = {
  allShips: []
};

export function reducer(state = initialState, action: ShipsActions): State {
  switch (action.type) {
    case ShipsActionTypes.SetShips:
      return {
        ...state,
        allShips: action.payload
      };
    default:
      return state;
  }
}

export const getAllShips = (state: State) => state.allShips;
