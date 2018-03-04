import { getAllRequests, addNewRequest } from '../utils/api';
import {
  startLoadingRequests,
  finishLoadingRequests,
} from './loadingAction';

export const ADD_ALL_REQUESTS = 'ADD_ALL_REQUESTS';
export const SELECT_REQUEST = 'SELECT_REQUEST';

const addAllRequests = (requests) => ({
  type: ADD_ALL_REQUESTS,
  requests,
})

export const fetchAddAllRequests = () => (dispatch) => {
  dispatch(startLoadingRequests());
  return getAllRequests()
    .then(requests => {
      dispatch(finishLoadingRequests())
      dispatch(addAllRequests(requests));
    })
    .catch(console.log);
}

export const selectRequest = (id) => ({
  type: SELECT_REQUEST,
  id
});

export const createNewRequest = (request) => (dispatch) => {
  return addNewRequest(request)
    .then(saved => dispatch(selectRequest(saved.id)));
}
