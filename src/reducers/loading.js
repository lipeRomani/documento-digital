import {
  FINISH_LOADING_REQUESTS,
  START_LOADING_REQUESTS,
} from '../actions/loadingAction';

const defaultLoadingState = {
  isLoadingRequestList: false,
}

const loading = (state = defaultLoadingState, action) => {
  switch (action.type) {
    case START_LOADING_REQUESTS:
      return {
        ...state,
        isLoadingRequestList: true,
      };
    case FINISH_LOADING_REQUESTS:
      return {
        ...state,
        isLoadingRequestList: false,
      };
    default:
      return state;
  }
}

export default loading;