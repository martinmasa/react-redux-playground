export const SET_TECHNOLOGY = 'hello/SET_TECHNOLOGY';

const initialState = {
  tech: 'React'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TECHNOLOGY:
      return {
        ...state,
        tech: action.tech
      };
    default:
      return state;
  }
};

export default reducer;
