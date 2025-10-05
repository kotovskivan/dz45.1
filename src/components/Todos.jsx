import { useSelector, useDispatch } from 'react-redux'
import { fetchRequest, toggleLocal, clear } from '../redux/todosSlice'
import { selectTodos, selectTodosStatus, selectTodosError, selectCompletedTodos } from '../redux/selectors'

export default function Todos() {
  const items = useSelector(selectTodos)
  const status = useSelector(selectTodosStatus)
  const error = useSelector(selectTodosError)
  const completed = useSelector(selectCompletedTodos)
  const dispatch = useDispatch()

  const loading = status === 'loading'
  const failed = status === 'failed'
  const succeeded = status === 'succeeded'

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
        <button
          onClick={() => dispatch(fetchRequest())}
          disabled={loading}
          style={{
            padding: '10px 16px',
            borderRadius: '10px',
            border: '1px solid #2563eb',
            background: '#3b82f6',
            color: '#0b1324',
            fontWeight: 700,
            cursor: 'pointer',
            opacity: loading ? 0.6 : 1,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {loading ? '⏳ Завантаження...' : '🔄 Завантажити задачі'}
        </button>

        <button
          onClick={() => dispatch(clear())}
          disabled={!items.length}
          style={{
            padding: '10px 16px',
            borderRadius: '10px',
            border: '1px solid #374151',
            background: '#1f2937',
            color: '#e5e7eb',
            cursor: items.length ? 'pointer' : 'not-allowed',
            opacity: items.length ? 1 : 0.6,
          }}
        >
          🗑 Очистити
        </button>

        {/* 🔹 Индикация статуса */}
        {loading && <span style={{ color: '#60a5fa' }}>Йде запит до API...</span>}
        {succeeded && <span style={{ color: '#22c55e' }}>✅ Дані оновлено!</span>}
        {failed && <span style={{ color: '#f87171' }}>❌ Помилка: {error}</span>}
      </div>

      <div style={{ marginTop: '16px', opacity: 0.85 }}>
        Виконано: {completed.length} з {items.length}
      </div>

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
