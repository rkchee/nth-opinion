import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {lazyReducerEnhancer} from 'pwa-helpers/lazy-reducer-enhancer.js';
import thunk from 'redux-thunk';


export const store = createStore(
  (state, action) => state,
  compose(lazyReducerEnhancer(combineReducers), applyMiddleware(thunk))
);