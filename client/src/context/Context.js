// IMPORTS
import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

// CREATE innitial state
const INNITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INNITIAL_STATE);
     
// THIS reducer will update the innitial state
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INNITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('user',JSON.stringify(state.user));
    },[state.user]);


  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
