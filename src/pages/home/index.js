import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from '~/pages/home/page';
import homePageReducer from './page/reducer';

const mapStateToProps = ({
  homePageReducer: mainReducer, // rename to avoid conflicts
  routing,
}) => ({
  homePageReducer: mainReducer,
  router: routing,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us'),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export const homePageReducers = {
  homePageReducer,
};
