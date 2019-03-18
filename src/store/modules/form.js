import * as api from '../../api/form';

export const REQUEST = 'FORM/REQUEST';
export const RECEIVE = 'FORM/RECEIVE';
export const REJECT = 'FORM/REJECT';
export const SUCCESS_SAVE_FORM_DATA = 'FORM/SUCCESS_SAVE_FORM_DATA';

const initialState = {
  loading: false,
  formData: {},
};

export const getFormData = () => async (dispatch, getState) => {
  const { loading } = getState().form;
  if (loading) return;

  try {
    dispatch({ type: REQUEST });
    const payload = await api.getFormData();

    dispatch({ type: RECEIVE });
    dispatch({ type: SUCCESS_SAVE_FORM_DATA, formData: payload })
  } catch (err) {
    console.error(err);
    dispatch({ type: REJECT });
  }
};

export const submitForm = payload => async (dispatch, getState) => {

};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, loading: true };
    case RECEIVE:
      return { ...state, loading: false };
    case REJECT:
      return { ...initialState, formData: state.formData || {} };
    case SUCCESS_SAVE_FORM_DATA:
      return { ...state, formData: action.formData };
    default:
      return state;
  }
};

export default reducer;