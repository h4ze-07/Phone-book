import { useEffect, useState } from "react"

import { Contacts, Form} from './components'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./components/Root"

function App() {

  const API = 'https://jsonplaceholder.typicode.com/users?_limit=5'

  
  const [users, setUsers] = useState([])
  const [modifiedUser, setModifiedUser] = useState(null)

  const handleModifiedUser = (user) => {
    setModifiedUser(user)
  }

  useEffect(() => {
    const fetchAPI = async (api) => {
      const res = await fetch(api)
      const data = await res.json()
      setUsers(data)
    }
    fetchAPI(API)
  }, [])



  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Contacts users={users} setUsers={setUsers} handleModifiedUser={handleModifiedUser} />
        },
        {
          path: '/form',
          element: <Form users={users} setUsers={setUsers} modifiedUser={modifiedUser} setModifiedUser={setModifiedUser} />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
