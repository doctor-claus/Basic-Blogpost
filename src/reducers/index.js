import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; //saves time from creating action creators manually
import PostsReducer from './reducer_posts';
const rootReducer = combineReducers({
  posts: PostsReducer,  
  form: formReducer
});

export default rootReducer;
