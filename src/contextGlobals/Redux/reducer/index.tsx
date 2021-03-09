import {ReducerSounds} from './reducerSounds';
import { combineReducers } from 'redux';

export default combineReducers({
  soundPadReducer: ReducerSounds,
});

