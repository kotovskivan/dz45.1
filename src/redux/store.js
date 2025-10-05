
import { configureStore } from '@reduxjs/toolkit'
import counter from './counterSlice'
import todos from './todosSlice'

const logger = store => next => action => {
  const result = next(action)
  return result
}

export default configureStore({
  reducer: { counter, todos },
  middleware: getDefault => getDefault().concat(logger)
})
