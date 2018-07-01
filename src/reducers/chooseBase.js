import { CHOOSE_BASE } from '../actions/actions'

export default (state = [], action = {}) => {
  switch(action.type) {
    case CHOOSE_BASE:
      //console.log(action.payload);
      return action.payload
    default:
      return state
  }
}
