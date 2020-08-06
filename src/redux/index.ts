import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import Reducer from './reducers'
import Saga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancer = (window as any).__Redux_DEVTOOLS_EXTENSION_COMPOSE_ ? (window as any).__Redux_DEVTOOLS_EXTENSION_COMPOSE_() : compose

const store = createStore(Reducer, composeEnhancer(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(Saga)

export default store