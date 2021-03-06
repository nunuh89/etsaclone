import { connect } from 'react-redux';

import { selectAllItems } from '../../reducers/selectors';
import { fetchSearchedItems } from '../../actions/item_actions';
import SearchForm from './search_form';

const mapStateToProps = state => ({
  items: selectAllItems(state)
});

const mapDispatchToProps = dispatch => ({
  fetchSearchedItems: searchWords => dispatch(fetchSearchedItems(searchWords))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
