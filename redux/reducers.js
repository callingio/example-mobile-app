const initialStateApp = {
  auth: null,
  user: null,
  vmboxes: null,
};

export function appReducer(state = initialStateApp, action) {
  switch (action.type) {
    case "SET_APP_STATE":
      return { ...state, ...action.payload };
    case "CLEAR_APP_STATE":
      return { ...initialStateApp };
    default:
      return state;
  }
}

const initialStateTmp = {
  loggingIn: false,
  loginError: false,
};

export function tmpReducer(state = initialStateTmp, action) {
  switch (action.type) {
    case "SET_TMP_STATE":
      return { ...state, ...action.payload };
    case "CLEAR_TMP_STATE":
      return { ...initialStateTmp };
    default:
      return state;
  }
}
