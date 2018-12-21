import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from '../constants/app'

const initialState = {
  flash: false,
  message: null,
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case OPEN_SNACKBAR:
      return { ...state, flash: true, message: action.result }
    case CLOSE_SNACKBAR:
      return { ...state, flash: false, message: null }
    default:
      return state
  }
}
