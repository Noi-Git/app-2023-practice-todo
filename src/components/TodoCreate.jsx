import React, { useState } from 'react'

const TodoCreate = ({ onCreate }) => {
  const [todoTitle, setTodoTitle] = useState('')

  const handleTodoChange = (e) => {
    setTodoTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(todoTitle)

    onCreate(todoTitle)
    setTodoTitle('')
  }

  return (
    <div className='create-main'>
      <h1 className='app-header'>TODOS</h1>
      <form className='app-todo' onSubmit={handleSubmit}>
        <div className='input-field'>
          <input
            className='todo-input'
            type='text'
            value={todoTitle}
            onChange={handleTodoChange}
          />
          <button className='todo-button'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default TodoCreate
