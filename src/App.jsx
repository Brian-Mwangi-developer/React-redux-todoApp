import AddTodoForm from "./AddTodoForm"
import TotalCompleteItems from "./components/TotalCompleteItems"
import TodoList from "./components/todoList"

function App() {

  return (
    <div className='container bg-white p-4 mt-5'>
    <h1 className=" text-center">My Todo List</h1>
      <AddTodoForm/>
      <TodoList/>
      <TotalCompleteItems/>
    </div>
  )
}

export default App
