import { createStore, combineReducers, applyMiddleware } from 'redux';
import listReducer from '../Reducers/listReducer';
import formReducer from '../Reducers/formReducer';
import thunk from "redux-thunk";

const reducer = combineReducers({
  serviceList: listReducer,
  serviceAdd: formReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;