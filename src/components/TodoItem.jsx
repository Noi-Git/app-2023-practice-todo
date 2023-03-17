import React, { useState } from 'react'
import ShowEdit from './ShowEdit'

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false)

  const handleDelete = (id) => {
    onDelete(todo.id)
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  const handleEditSubmit = (id, newTodoTitle) => {
    setShowEdit(false)
    onEdit(id, newTodoTitle)
  }

  let content = <li className='todo-title'>{todo.todoTitle}</li>
  if (showEdit) {
    content = <ShowEdit todo={todo} onEditSubmit={handleEditSubmit} />
  }

  return (
    <div className='todo-items'>
      <ul className='todo-item'>
        {/* <li className='todo-title'>{todo.todoTitle}</li> */}
        {content}
        <button className='edit-button' onClick={handleEditClick}>
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
