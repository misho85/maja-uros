import {
  SET_BOOK_FORM,
  SET_WORK_METHOD,
  SET_SERVICES,
  SUBMIT_FORM_PENDING,
  RESET,
} from './types';

// actions
export const setBookForm = (field, value) => ({
  type: SET_BOOK_FORM,
  field,
  value,
});

export const setWorkMethod = workMethod => ({
  type: SET_WORK_METHOD,
  workMethod,
});

export const setServices = (service, check) => ({
  type: SET_SERVICES,
  service,
  check,
});

export const submitFormPending = () => ({
  type: SUBMIT_FORM_PENDING,
});

export const reset = () => ({
  type: RESET,
});
