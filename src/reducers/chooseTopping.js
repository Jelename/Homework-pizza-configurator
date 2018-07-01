import { CHOOSE_TOPPING, DELETE_TOPPING } from '../actions/actions'

export default (state = [], action = {}) => {
  switch(action.type) {
    case CHOOSE_TOPPING:
      console.log([...state, action.payload.topping]);
      return [...state, action.payload.topping]
    case DELETE_TOPPING:
      return state.filter(item => item !== action.payload.topping)
    default:
      return state
  }
}
