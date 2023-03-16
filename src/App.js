import { useState } from 'react'
import uuid from 'react-uuid'
import './App.css'
import TodoCreate from './components/TodoCreate'

function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (todoTitle) => {
    const updatedTodo = [...todos, { id: uuid(), todoTitle }]
    setTodos(updatedTodo)
  }

  return (
    <div className='App'>
      <TodoCreate onCreate={createTodo} />
    </div>
  )
}

export default App
