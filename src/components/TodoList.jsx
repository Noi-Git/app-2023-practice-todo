import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onDelete, onEdit }) => {
  const renderedTodos = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
  ))

  let currentDate = new Date().toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div className='list-main'>
      <div className='todo-list'>
        {todos.length === 0 ? (
          <h4 className='date'>You do not have todo item for: {currentDate}</h4>
        ) : (
          <h4 className='date'>{currentDate}</h4>
        )}
        {renderedTodos}
      </div>
    </div>
  )
}

export default TodoList
