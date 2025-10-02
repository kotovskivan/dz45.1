import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../redux/counterSlice'

export default function Counter() {
  const value = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Значення: {value}</h2>
      <button onClick={() => dispatch(increment())}>Додати</button>
      <button onClick={() => dispatch(decrement())}>Відняти</button>
      <button onClick={() => dispatch(reset())}>Скинути</button>
    </div>
  )
}