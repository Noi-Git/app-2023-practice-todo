import { useState } from 'react'
import uuid from 'react-uuid'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (todoTitle) => {
    const updatedTodo = [...todos, { id: uuid(), todoTitle }]
    setTodos(updatedTodo)
  }

  const editTodo = (id, newTodoTitle) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todoTitle: newTodoTitle }
      }
      return todo
    })
    setTodos(updatedTodo)
  }

  const deleteTodo = (id) => {
    const updatedTodo = todos.filter((todo) => {
      return id !== todo.id
    })
    setTodos(updatedTodo)
  }

  return (
    <div className='App'>
      <TodoCreate onCreate={createTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  )
}

export default App
