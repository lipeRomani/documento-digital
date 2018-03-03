import {
  ADD_ALL_REQUESTS,
  SELECT_REQUEST
} from '../actions/requestsAction';

const init = {
  selectedId: null,
  list: []
}

const requests = (state = init, action) => { 
  switch(action.type) {
    case ADD_ALL_REQUESTS:
      return {
        ...state,
        list: action.requests,
      };
    case SELECT_REQUEST:
      return {
        ...state,
        selectedId: action.id,
      }
    default:
      return state;
  }
}

export default requests;