import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos, toggleLocal, clear } from '../redux/todosSlice'
import { selectTodos, selectTodosStatus, selectTodosError, selectCompletedTodos } from '../redux/selectors'

export default function Todos() {
  const items = useSelector(selectTodos)
  const status = useSelector(selectTodosStatus)
  const error = useSelector(selectTodosError)
  const completed = useSelector(selectCompletedTodos)
  const dispatch = useDispatch()

  const loading = status === 'loading'

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={() => dispatch(fetchTodos())} disabled={loading} style={{ padding: '10px 16px', borderRadius: '10px', border: '1px solid #2563eb', background: '#3b82f6', color: '#0b1324', fontWeight: 700, cursor: 'pointer', opacity: loading ? .6 : 1 }}>
          {loading ? 'Завантаження...' : 'Завантажити задачі'}
        </button>
        <button onClick={() => dispatch(clear())} disabled={!items.length} style={{ padding: '10px 16px', borderRadius: '10px', border: '1px solid #374151', background: '#1f2937', color: '#e5e7eb', cursor: items.length ? 'pointer' : 'not-allowed', opacity: items.length ? 1 : .6 }}>
          Очистити
        </button>
      </div>

      {status === 'failed' && <div style={{ marginTop: '10px', color: '#fca5a5' }}>Помилка: {error}</div>}

      <div style={{ marginTop: '16px', opacity: .85 }}>Виконано: {completed.length} з {items.length}</div>

      <ul style={{ marginTop: '12px', paddingLeft: '18px' }}>
        {items.map(t => (
          <li key={t.id} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox" checked={!!t.completed} onChange={() => dispatch(toggleLocal(t.id))} />
            <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>{t.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}