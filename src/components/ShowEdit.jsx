import React, { useState } from 'react'

const ShowEdit = ({ todo, onEditSubmit }) => {
  const [newEditTitle, setNewEditTitle] = useState(todo.todoTitle)

  const handleShowEditChange = (e) => {
    setNewEditTitle(e.target.value)
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()
    onEditSubmit(todo.id, newEditTitle)
  }

  return (
    <form onSubmit={handleEditSubmit}>
      <input
        className='edit-input'
        type='text'
        onChange={handleShowEditChange}
        value={newEditTitle}
        // put cursor at the end of input text
        ref={(ref) => ref && ref.focus()}
        onFocus={(e) =>
          e.currentTarget.setSelectionRange(
            e.currentTarget.value.length,
            e.currentTarget.value.length
          )
        }
      />
    </form>
  )
}

export default ShowEdit
