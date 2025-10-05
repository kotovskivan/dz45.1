
import Counter from './components/Counter'
import Todos from './components/Todos'

export default function App() {
  return (
    <div style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', color: '#e2e8f0', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, sans-serif', padding: '32px' }}>
      <div style={{ width: 'min(900px, 100%)', display: 'grid', gap: '24px' }}>
        <div style={{ padding: '24px', borderRadius: '16px', background: '#111827', boxShadow: '0 10px 30px rgba(0,0,0,.35)' }}>
          <h1 style={{ margin: 0, fontSize: '28px' }}>Лічильник з Redux Toolkit</h1>
          <p style={{ opacity: .8, marginTop: '6px' }}>Стан через слайс</p>
          <Counter />
        </div>
        <div style={{ padding: '24px', borderRadius: '16px', background: '#111827', boxShadow: '0 10px 30px rgba(0,0,0,.35)' }}>
          <h2 style={{ marginTop: 0 }}>Список завдань (Redux Saga)</h2>
          <Todos />
        </div>
      </div>
    </div>
  )
}
