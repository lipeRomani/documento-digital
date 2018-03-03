import { combineReducers } from 'redux';
import requests from './requests';
import modal from './modal';

export default combineReducers({
  requests,
  modal,
});
