import rootReducer from "./rootReducer";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore, applyMiddleware } from "redux";

const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;