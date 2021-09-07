import { LIST_ERROR, LIST_START, LIST_SUCCESS } from './listActions';

export default function listReducer(state, action) {
  switch (action.type) {
    case LIST_START:
      return {
        ...state,
        loading: true,
      };
    case LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        lists: [...action.payload],
        error: null,
      };
    case LIST_ERROR:
      return {
        loading: false,
        lists: [],
        error: true,
      };
    default:
      return state;
  }
}
