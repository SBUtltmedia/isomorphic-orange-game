import { FETCH_ORANGES, DROP_IN_DISH, DROP_IN_BASKET, NEW_DAY } from '../constants/ActionTypes';

const initialState = {
  box: 7,
  basket: 0,
  dish: 0
};

export default function oranges(state=initialState, action) {
    switch (action.type) {
        case FETCH_ORANGES:
            console.log("Action", action);
            return action.oranges;
        case DROP_IN_DISH:
            return {
                box: state.box - 1,
                dish: state.dish + 1,
                basket: state.basket
            }
        case DROP_IN_BASKET:
          return {
            box: state.box - 1,
            dish: state.dish,
            basket: state.basket + 1
          }
        case NEW_DAY:
        default:
            return state;
    }
    return state;
}
