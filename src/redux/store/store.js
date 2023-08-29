import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from "../reducer/reducer"
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools())
export default store