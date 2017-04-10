import { combineReducers } from 'redux';
import ThemeReducer from './theme';

const rootReducer = combineReducers({
  theme: ThemeReducer,
});

export default rootReducer;
