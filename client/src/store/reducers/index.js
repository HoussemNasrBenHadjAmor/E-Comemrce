import { combineReducers } from "redux";

import auth from "./auth";

import user from "./user";

export const reducers = combineReducers({ auth, user });
