import { combineReducers } from 'redux'
import chooseBase from './chooseBase'
import chooseSauce from './chooseSauce'
import chooseTopping from './chooseTopping'

export default combineReducers({
    chooseBase,
    chooseSauce,
    chooseTopping
})
