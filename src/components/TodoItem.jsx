import React from 'react'

const TodoItem = ({ todo, onDelete }) => {
  const handleEdit = () => {}

  const handleDelete = (id) => {
    onDelete(todo.id)
  }

  return (
    <div className='todo-items'>
      <ul className='todo-item'>
        <li className='todo-title'>{todo.todoTitle}</li>
        <button className='edit-button' onClick={handleEdit}>
          Edit
        </button>
        <button className='delete-button' onClick={handleDelete}>
          Delete
        </button>
      </ul>
    </div>
  )
}

export default TodoItem
