import { useState } from 'react'
import Todos from './components/Todos';  // Lalukan Import
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

  console.log(todos)

 
  return (
    <div>
      <h1>My Todo List</h1>
      {/* Berikan data-nya ke component Todos */}
      <Todos todos={todos} />
      {/* Menampilkan component Todos */}
    </div>
  )
}

export default App