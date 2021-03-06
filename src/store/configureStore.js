import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import marketsReducer from './reducers/markets'
import watchReducer from './reducers/watch'
import newsReducer from './reducers/news'

const rootReducer = combineReducers({
  markets: marketsReducer,
  watch: watchReducer,
  news: newsReducer,
})

let composeEnhancers = compose

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const configureStore = () => createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default configureStore
