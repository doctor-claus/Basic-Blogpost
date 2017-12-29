import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; //saves time from creating action creators manually
import PostsReducer from './reducer_posts';
import EditPostReducer from './reducer_post_edit';
const rootReducer = combineReducers({
  posts: PostsReducer,
  editpost: EditPostReducer,
  form: formReducer
});

export default rootReducer;
