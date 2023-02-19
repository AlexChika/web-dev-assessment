import {
  createContext,
  useReducer,
  ReactNode,
  useContext,
  useEffect,
} from "react";

import reducer from "./reducer";
import { types } from "./reducer";
const AppContext = createContext<ContextType | null>(null);

const initialState: StateType = {
  user: null,
  isLoginValid: false,
};
function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setUser(user: LoginInfoType) {
    validateUser(user);
    dispatch({ type: types.SETUSER, payload: user });
  }

  console.log(state.isLoginValid);

  function validateUser(user: LoginInfoType) {
    if (!user) return;
    const dateString = user.validatedAt;
    const currenTime = new Date().getTime();
    const loggedInTime = new Date(dateString).getTime();
    const timePast = currenTime - loggedInTime;
    const isLoginValid = timePast < 60 * 2 * 1000;
    dispatch({ type: types.VALIDATEUSER, payload: isLoginValid });
    console.log(isLoginValid);
    return isLoginValid;
  }

  useEffect(() => {
    if (!state.user) return;
    console.log(state.isLoginValid);

    function call() {
      if (validateUser(state.user)) {
        setTimeout(() => {
          call();
        }, 60 * 2 * 1000);
      }
    }

    call();
  }, [state.user]);

  return (
    <AppContext.Provider value={{ ...state, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default AuthProvider;
export const Auth = () => useContext(AppContext);
