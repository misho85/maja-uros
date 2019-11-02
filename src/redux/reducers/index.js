import { combineReducers } from 'redux';
import bookForm from './bookForm';
import submitForm from './submitForm';

export default combineReducers({ bookForm, submitForm });
