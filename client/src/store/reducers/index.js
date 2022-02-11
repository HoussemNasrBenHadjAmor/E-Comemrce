import { combineReducers } from "redux";

import auth from "./auth";

import user from "./user";

import category from "./category";

export const reducers = combineReducers({ auth, user, category });
