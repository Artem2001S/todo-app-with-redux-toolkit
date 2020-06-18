import { combineReducers } from 'redux';
import todosState from 'redux/reducers/todosReducer';
import UIDataState from 'redux/reducers/UIData';

export default combineReducers({ todosState, UIDataState });
