export const CHOOSE_BASE = 'CHOOSE_BASE'
export const CHOOSE_SAUCE = 'CHOOSE_SAUCE'
export const CHOOSE_TOPPING = 'CHOOSE_TOPPING'
export const DELETE_TOPPING = 'DELETE_TOPPING'

export function chooseBase(base) {
  return {
    type: CHOOSE_BASE,
    payload: base
  }
}

export function chooseSauce(sauce) {
  return {
    type: CHOOSE_SAUCE,
    payload: sauce
  }
}

export function chooseTopping(topping) {
  console.log(topping)
  return {
    type: CHOOSE_TOPPING,
    payload: {
      topping
    }
  }
}

export function deleteTopping(topping) {
  console.log(topping)
  return {
    type: DELETE_TOPPING,
    payload: {
      topping
    }
  }
}