import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import CollectionsOverview from './collections-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state),
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionsOverview);

export default CollectionsOverviewContainer;
