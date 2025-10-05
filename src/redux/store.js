
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import counter from './counterSlice'
import todos from './todosSlice'
import rootSaga from './sagas/rootSaga'

const saga = createSagaMiddleware()

const logger = store => next => action => {
  const result = next(action)
  return result
}

const store = configureStore({
  reducer: { counter, todos },
  middleware: getDefault => getDefault({ thunk: false }).concat(saga, logger)
})

saga.run(rootSaga)

export default store
