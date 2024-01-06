import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todoText) => {
    setTodos((prev) => [{ id: Date.now() , ...todoText}, ...prev])
  }

  const updateTodo = (id, todoText) => {
    setTodos((prev) => prev.map((todoObj) => (todoObj.id === id ? todoText : todoObj )))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => (prevTodo.id !== id)))
  }

  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((todoObj) => todoObj.id === id ? {...todoObj, completed: !todoObj.completed} : todoObj))
  }

  useEffect(() => {
    const localTodo = JSON.parse(localStorage.getItem("todos"))

    if(localTodo && localTodo.length > 0){
      setTodos(localTodo)

    }

 
  },[])

  useEffect(() => {
       localStorage.setItem("todos",JSON.stringify(todos) )
  },[todos])

  return (
    <TodoContextProvider value ={{todos, addTodo, deleteTodo, updateTodo, toggleCompleted}}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm/>
                       
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div
                          key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
