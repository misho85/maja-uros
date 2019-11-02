import {
  SET_BOOK_FORM,
  SET_WORK_METHOD,
  SET_SERVICES,
  RESET,
} from '../actions/types';

const initialState = {
  name: '',
  email: '',
  jobTitle: '',
  message: '',
  checked: false,
  workMethod: '',
  services: {
    backend: false,
    frontend: false,
    mobile: false,
    design: false,
    marketing: false,
    busines: false,
  },
};
const bookForm = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOK_FORM:
      return {
        ...state,
        [action.field]: action.value,
      };
    case SET_WORK_METHOD:
      return {
        ...state,
        workMethod: action.workMethod,
      };
    case SET_SERVICES:
      return {
        ...state,
        services: {
          ...state.services,
          [action.service]: action.check,
        },
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default bookForm;
