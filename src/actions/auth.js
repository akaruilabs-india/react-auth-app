import { generateAuthActions } from 'redux-token-auth'
const AUTH_URL = 'http://localhost:4000/api/users'

const config = {
  authUrl: AUTH_URL,
  userAttributes: {
    id: 'id',
    firstName: 'first_name',
    lastName: 'last_name',
    email: 'email',
    imageUrl: 'image',
  },
  userRegistrationAttributes: {
    firstName: 'first_name',
    lastName: 'last_name',
    email: 'email',
    password: 'password',
  },
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}
