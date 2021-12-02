import { combineReducers } from "redux";

import dcis from "./dcis";
import auth from "./auth";

export const reducers = combineReducers({ dcis, auth });
