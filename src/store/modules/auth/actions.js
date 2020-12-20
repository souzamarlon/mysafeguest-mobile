export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function residentSignInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_RESIDENT_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(
  name,
  email,
  password,
  street,
  number,
  city,
  state,
  postal_code
) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      name,
      email,
      password,
      street,
      number,
      city,
      state,
      postal_code,
    },
  };
}

export function signUpSuccess(id) {
  return {
    type: '@auth/SIGN_UP_SUCCESS',
    payload: { id },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}
export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
