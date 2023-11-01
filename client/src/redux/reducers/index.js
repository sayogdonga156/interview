import { combineReducers } from "redux";
import { loginReduser } from "./userReducers";
import { selectionReduser } from "./selectionReducer";

const reducers = combineReducers({
  User: loginReduser,
  Selection: selectionReduser,
});

export default reducers;
