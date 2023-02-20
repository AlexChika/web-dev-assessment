import {
  createContext,
  useReducer,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { getCookie, setCookie, isUserValid } from "../utils/cookies";

import reducer from "./reducer"; //the reducer function
import { types } from "./reducer"; //action types
const AppContext = createContext<ContextType | null>(null);

const initialState: StateType = {
  user: getCookie(),
  isLoginValid: getCookie() ? isUserValid(getCookie()).isLoginValid : false,
};

function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // func sets user login detail to state (used at LoginForm.tsx)
  function setUser(user: LoginInfoType) {
    dispatch({
      type: types.VALIDATEUSER,
      payload: isUserValid(user).isLoginValid,
    });
    setCookie(user);
    dispatch({ type: types.SETUSER, payload: user });
  }

  // app intializer effect not really needed
  useEffect(() => {
    const user = getCookie();

    if (user) {
      dispatch({
        type: types.VALIDATEUSER,
        payload: isUserValid(user).isLoginValid,
      });
    }
  }, []);

  // effect tracks users login time
  useEffect(() => {
    if (!state.user) return;

    function validateUser(user: LoginInfoType) {
      let isValid = isUserValid(user).isLoginValid;
      dispatch({
        type: types.VALIDATEUSER,
        payload: isValid,
      });
      return isValid;
    }

    function call() {
      if (validateUser(state.user)) {
        setTimeout(() => {
          call();
        }, isUserValid(state.user).timeRemaining);
      }
    }

    call();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.user]);

  return (
    <AppContext.Provider value={{ ...state, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default AuthProvider;
export const Auth = () => useContext(AppContext);
