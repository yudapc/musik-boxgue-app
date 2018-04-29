import { connect } from 'react-redux';
import { PageOfflineComponent } from './component';

const mapStateToProps = state => {
  return {
    isConnected: state.globalReducer.isConnected
  };
};
export const PageOfflineContainer = connect(mapStateToProps, null)(PageOfflineComponent);
export default PageOfflineContainer;
