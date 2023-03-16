import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const handleTodoChange = (event) => {
    setTodos(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div className='App'>
      <div className='app-main'>
        <form className='app-todo'>
          <div>
            <h1>Add your todo</h1>
            <div className='input-field'>
              <input
                className='todo-input'
                type='text'
                value={todos}
                onChange={handleTodoChange}
              />
              <button className='todo-button'>Add</button>
            </div>
          </div>
        </form>
        <TodoList todos={todos} />
      </div>
    </div>
  )
}

export default App
