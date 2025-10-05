
import { createSelector } from '@reduxjs/toolkit'

export const selectCount = state => state.counter.value
export const selectTodos = state => state.todos.items
export const selectTodosStatus = state => state.todos.status
export const selectTodosError = state => state.todos.error

export const selectCompletedTodos = createSelector(
  [selectTodos],
  items => items.filter(t => t.completed)
)
