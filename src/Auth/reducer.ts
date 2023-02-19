type ActionType = {
  type: string;
  payload?: any;
};

function reducer(state: StateType, action: ActionType) {
  if (action.type === types.SETUSER) {
    return {
      ...state,
      user: action.payload,
    };
  }

  if (action.type === types.VALIDATEUSER) {
    return {
      ...state,
      isLoginValid: action.payload,
    };
  }

  return state;
}
export default reducer;

// ACTION TYPES ARE DECLARED HERE INSTEAD OF A SEPARATE FILE
const SETUSER = "SETUSER";
const VALIDATEUSER = "VALIDATEUSER";

export const types = {
  SETUSER,
  VALIDATEUSER,
};
