
export const OPEN_CREATE_REQUEST_MODAL = 'OPEN_CREATE_REQUEST_MODAL';
export const CLOSE_CREATE_REQUEST_MODAL = 'CLOSE_CREATE_REQUEST_MODAL';

export const openCreateRequestModal = () => {
  return {
    type: OPEN_CREATE_REQUEST_MODAL,
  }
}

export const closeCreateRequestModal = () => {
  return {
    type: CLOSE_CREATE_REQUEST_MODAL,
  }
}
