
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'todos',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {
    fetchRequest: state => { state.status = 'loading'; state.error = null },
    fetchSuccess: (state, action) => { state.status = 'succeeded'; state.items = action.payload },
    fetchFailure: (state, action) => { state.status = 'failed'; state.error = action.payload || 'Помилка' },
    toggleLocal: (state, action) => {
      const t = state.items.find(x => x.id === action.payload)
      if (t) t.completed = !t.completed
    },
    clear: state => { state.items = []; state.status = 'idle'; state.error = null }
  }
})

export const { fetchRequest, fetchSuccess, fetchFailure, toggleLocal, clear } = slice.actions
export default slice.reducer
