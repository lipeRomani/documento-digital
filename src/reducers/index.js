import { combineReducers } from 'redux';
import requests from './requests';
import modal from './modal';
import loading from './loading';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  requests,
  modal,
  loading,
  form: formReducer,
});
