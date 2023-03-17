import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onDelete }) => {
  const renderedTodos = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
  ))
  return (
    <div className='list-main'>
      <div className='todo-list'>{renderedTodos}</div>
    </div>
  )
}

export default TodoList
