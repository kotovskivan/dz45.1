
import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchRequest, fetchSuccess, fetchFailure } from '../todosSlice'

function getTodos() {
  return fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(r => {
      if (!r.ok) throw new Error('Помилка завантаження')
      return r.json()
    })
}

function* fetchTodosWorker() {
  try {
    const data = yield call(getTodos)
    yield put(fetchSuccess(data))
  } catch (e) {
    yield put(fetchFailure(e.message || 'Помилка'))
  }
}

export default function* todosSaga() {
  yield takeLatest(fetchRequest.type, fetchTodosWorker)
}
