import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../redux/counterSlice'

export default function Counter() {
  const value = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{
        fontSize: '56px',
        fontWeight: 700,
        marginBottom: '16px',
        lineHeight: 1
      }}>{value}</div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={() => dispatch(decrement())}
                style={{ padding: '10px 16px', borderRadius: '10px', border: '1px solid #FF0000', background: '#FF0000', color: '#e5e7eb', cursor: 'pointer' }}>
          Відняти
        </button>
        <button onClick={() => dispatch(reset())}
                style={{ padding: '10px 16px', borderRadius: '10px', border: '1px solid #374151', background: '#111827', color: '#e5e7eb', cursor: 'pointer' }}>
          Скинути
        </button>
        <button onClick={() => dispatch(increment())}
                style={{ padding: '10px 16px', borderRadius: '10px', border: '1px solid #16a34a', background: '#22c55e', color: '#062f11', fontWeight: 700, cursor: 'pointer' }}>
          Додати
        </button>
      </div>
    </div>
  )
}
