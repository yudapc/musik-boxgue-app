import { connect } from 'react-redux';
import { PageChordsComponent } from './component';
import { fetchChords } from './action';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  chordsData: () => dispatch(fetchChords())
});

export const PageChordsContainer = connect(mapStateToProps, mapDispatchToProps)(
  PageChordsComponent
);
export default PageChordsContainer;
