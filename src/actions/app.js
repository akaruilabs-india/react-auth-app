import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from '../constants/app'

export function openSnackBar(data) {
  return {
    type: OPEN_SNACKBAR,
    result: data,
  }
}

export function closeSnackBar() {
  return {
    type: CLOSE_SNACKBAR,
  }
}

export const openSnack = (message) => {
  return dispatch => {
    dispatch(openSnackBar(message))
  }
}

export const closeSnack = () => {
  return dispatch => {
    dispatch(closeSnackBar())
  }
}
