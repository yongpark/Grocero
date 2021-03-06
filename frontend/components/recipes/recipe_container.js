import {connect} from 'react-redux';
import Recipe from './recipe';
import {fetchList} from '../../actions/list_actions';
import {selectList, selectColumns} from '../../reducers/selector';
import {fetchColumns} from '../../actions/column_actions';
import {fetchRecipes, fetchRecipeIDs} from '../../actions/spoonacular_api_actions';

const mapStateToProps = (state, ownProps) => ({
  list: selectList(state, ownProps.listId),
  columns: selectColumns(state)
});

const mapDispatchToProps = dispatch => ({
  fetchList: id => dispatch(fetchList(id)),
  fetchColumns: listId => dispatch(fetchColumns(listId)),
  fetchRecipes: ids => dispatch(fetchRecipes(ids)),
  fetchRecipeIDs: ingredients => dispatch(fetchRecipeIDs(ingredients))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
