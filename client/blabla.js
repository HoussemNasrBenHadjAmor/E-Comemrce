/**
 * ! One Action
 */

import * as actions from "./actions";

import * as api from "./api";

export const loginUser = (user) =>
  async((dispatch) => {
    dispatch({ type: actions.request });
    try {
      const { data } = await api.login(user);

      dispatch({ type: actions.success, payload: data });
    } catch (error) {
      dispatch({
        type: actions.failure,
        payload:
          error?.response && error?.response?.data
            ? error.response.data
            : error.response,
      });
    }
  });

/**
 * ! One Reducer
 */

import * as actions from "./actions";

const initialeState = {};

export default (user = initialeState, action) => {
  switch (key) {
    case actions.success:
      return {
        user: action.payload,
      };

    default:
      return user;
  }
};

/**
 * ! Reducer Index.js
 */

import { combineReducers } from "redux";

import userReducer from "./userReducer";

import authReducer from "./userReducer";

export const reducers = combineReducers({ userReducer, authReducer });

/**
 * ! Store
 */

import { applyMiddleware, createStore, compose } from "redux";

import { thunk } from "redux-thunk";

import { reducers } from "./reducers";

export const store = createStore(reducers, compose(applyMiddleware(thunk)));

/**
 * ! CONTEXT
 */

import { createContext, useContext, useState } from "react";

const [user, setUser] = useState([]);

const [dark, setDark] = useState([]);

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  return (
    <StateContext.Provider value={{ user, setUser, dark, setDark }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

/**
 * ! App Index.js
 */

import { Provider } from "redux-thunk";

import { store } from "./store";

import { StateContextProviderr } from "./context";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StateContextProviderr>
        <App />
      </StateContextProviderr>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
