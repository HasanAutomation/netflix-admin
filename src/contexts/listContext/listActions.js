export const LIST_START = 'LIST_START';
export const LIST_SUCCESS = 'LIST_SUCCESS';
export const LIST_ERROR = 'LIST_ERROR';

export const listStart = () => ({
  type: LIST_START,
});

export const listSuccess = data => {
  return {
    type: LIST_SUCCESS,
    payload: data,
  };
};

export const listError = () => ({
  type: LIST_ERROR,
});
