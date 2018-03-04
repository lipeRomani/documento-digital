
export const START_LOADING_REQUESTS = 'START_LOADING_REQUEST';
export const FINISH_LOADING_REQUESTS = 'FINISH_LOADING_REQUEST';

export const startLoadingRequests = () =>  ({
  type: START_LOADING_REQUESTS,
});

export const finishLoadingRequests = () => ({
  type: FINISH_LOADING_REQUESTS,
});
