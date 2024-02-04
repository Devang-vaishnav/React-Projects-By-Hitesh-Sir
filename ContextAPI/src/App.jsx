import UserContextProvider from './Context/UserContextProvider'
import Login from './Component/Login.jsx'
import Profile from './Component/Profile.jsx'

function App() {
  return (
    <UserContextProvider>
      <h1 className=' bg-gray-500 text-white text-4xl text-center p-4'>ContextAPI</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
