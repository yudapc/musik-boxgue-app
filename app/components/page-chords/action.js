import apisauce from 'apisauce';
import ActionTypes from '../../store/action-types';

export const fetchChords = (keyword, page) => dispatch => {
  const baseURL = 'http://musik.boxgue.com/api/v1';
  const querySearch = keyword !== '' || keyword !== undefined ? `?q=${keyword}` : '';
  const path = `/chords${querySearch}&page=${page}&access_token=perfectSecret@j@`;
  const api = apisauce.create({
    baseURL,
    timeout: 30000
  });

  dispatch(startLoading);
  const response = api.get(path).then(response => {
    if (response.ok) {
      dispatch(setKeyword(keyword));
      dispatch(setPage(page + 1));
      dispatch(storeChords(response.data));
    }
    dispatch(endLoading());
  });
};

export const startLoading = () => ({
  type: ActionTypes.IS_LOAD_CHORDS,
  isLoading: true
});

export const endLoading = () => ({
  type: ActionTypes.IS_LOAD_CHORDS,
  isLoading: false
});

export const storeChords = data => ({
  type: ActionTypes.CHORDS_LIST,
  chords: data
});

export const setKeyword = keyword => ({
  type: ActionTypes.CHORD_SET_KEYWORD,
  keyword
});

export const setPage = page => ({
  type: ActionTypes.CHORD_SET_PAGE,
  page
});

export const emptyChords = () => ({
  type: ActionTypes.CHORDS_LIST_EMPTY,
  chords: []
});

export const refreshPage = () => dispatch => {
  dispatch(emptyChords());
  dispatch(setPage(1));
  dispatch(setKeyword(''));
  fetchChords('', 1);
};
