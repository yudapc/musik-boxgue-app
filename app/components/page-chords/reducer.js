import { ActionTypes } from '../../store/action-types';
import { union } from 'lodash';

const initialState = {
  chords: [],
  isLoading: true,
  keyword: '',
  page: 1
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHORDS_LIST: {
      return Object.assign({}, state, {
        chords: union(state.chords, action.chords)
      });
    }
    case ActionTypes.CHORD_SET_KEYWORD: {
      return Object.assign({}, state, {
        keyword: action.keyword
      });
    }
    case ActionTypes.CHORD_SET_PAGE: {
      return Object.assign({}, state, {
        page: action.page
      });
    }
    case ActionTypes.IS_LOAD_CHORDS: {
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });
    }
    case ActionTypes.CHORDS_LIST_EMPTY: {
      return Object.assign({}, state, {
        chords: []
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
