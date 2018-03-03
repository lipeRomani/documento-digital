import { getAllRequests } from '../utils/api'

export const ADD_ALL_REQUESTS = 'ADD_ALL_REQUESTS';
export const SELECT_REQUEST = 'SELECT_REQUEST';

const addAllRequests = (requests) => ({
  type: ADD_ALL_REQUESTS,
  requests,
})

export const fetchAddAllRequests = () => (dispatch) => {
  return getAllRequests()
    .then(requests => dispatch(addAllRequests(requests)))
    .catch(console.log);
}

export const selectRequest = (id) => ({
  type: SELECT_REQUEST,
  id
});
