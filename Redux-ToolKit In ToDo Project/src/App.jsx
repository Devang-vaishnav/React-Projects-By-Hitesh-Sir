import AddTodo from './Components/AddTodo.jsx'
import Todo from './Components/Todo.jsx'
import {Provider} from 'react-redux'
import {store} from './app/store.js'

function App() {

  return (
    <Provider store={store}>
    <div className=' bg-gray-600 flex-col justify-center items-center w-screen h-screen'>
    <div className=' h-60 flex items-center justify-center'>
    <AddTodo />
    </div>
    <Todo />
    </div>
    </Provider>
  )
}

export default App
