import { CHOOSE_SAUCE } from '../actions/actions'

export default (state = [], action = {}) => {
  switch(action.type) {
    case CHOOSE_SAUCE:
      //console.log(action.payload);
      return action.payload
    default:
      return state
  }
}
