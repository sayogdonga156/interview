import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers/index";
import thunk from "redux-thunk";
import { axiosClient } from "../components/axios/axiosClient";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, enhancer);

const getSingleUser = async () => {
  const user = await axiosClient.get(`/user/${localStorage.getItem("userId")}`);
  console.log(user.data.user);
  store.dispatch({ type: "LOGIN", payload: user.data.user });
};

if (localStorage.getItem("userId")) {
  getSingleUser();
}

export default store;
