import { SUBMIT_FORM_PENDING, RESET } from '../actions/types';

const initialState = {
  status: null,
  // data: null,
  // changed: null,
};

const submitForm = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM_PENDING:
      return {
        ...state,
        status: SUBMIT_FORM_PENDING,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default submitForm;
