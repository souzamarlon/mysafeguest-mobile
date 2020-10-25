export function signInRequest(email, password, isAdmin) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password, isAdmin },
  };
}

export function signInSuccess(token, user, isAdmin) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user, isAdmin },
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
