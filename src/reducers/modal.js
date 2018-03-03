import {
  CLOSE_CREATE_REQUEST_MODAL,
  OPEN_CREATE_REQUEST_MODAL,
} from '../actions/modalAction';


const defaultModal = {
  isOpenCreateRequest: false,
}

const modal = (state = defaultModal, action) => {
  switch(action.type) {
    case OPEN_CREATE_REQUEST_MODAL:
      return {
        isOpenCreateRequest: true
      }
    case CLOSE_CREATE_REQUEST_MODAL:
      return {
        isOpenCreateRequest: false
      }
    default:
      return state;
  }
}

export default modal;