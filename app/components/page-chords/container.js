import { connect } from 'react-redux';
import { PageChordsComponent } from './component';
import { fetchChords, refreshPage } from './action';

export const mapStateToProps = state => state.pageChordsReducer;

export const mapDispatchToProps = dispatch => ({
  getData: (keyword, page) => dispatch(fetchChords(keyword, page)),
  refreshPage: () => dispatch(refreshPage())
});

export const PageChordsContainer = connect(mapStateToProps, mapDispatchToProps)(
  PageChordsComponent
);

export default PageChordsContainer;
