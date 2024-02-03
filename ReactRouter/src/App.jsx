import { RouterProvider, createBrowserRouter, Route , createRoutesFromElements} from "react-router-dom"
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact us/Contact.jsx'
import About from './Components/About/About.jsx'
import Layout from './Components/Layout/Layout.jsx'
import User from './Components/User/User.jsx'
import Github, { getGithubInfo } from './Components/Github/Github.jsx'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} >
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='user/:userid' element={<User />} />
        <Route loader={getGithubInfo} path='github' element={<Github />} />
      </Route>
    )
  )

  return (
   <>
    <RouterProvider router ={router} />
   </>
  )
}

export default App
