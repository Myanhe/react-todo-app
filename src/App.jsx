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
     // Menambah CSS
     <div style={{ textAlign: 'center', padding: '12px' }}>
     <h1 style={{fontSize: '36px'}}>My Todo List</h1>
      <Todos todos={todos} />
      {/* Menampilkan component Todos */}
    </div>
  )
}
const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}
export default App