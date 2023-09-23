import { useEffect, useState } from "react"

import {Nav, Contacts, Form} from './components'

function App() {

  const API = 'https://jsonplaceholder.typicode.com/users?_limit=5'

  const [page, setPage] = useState('list')
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchAPI = async (api) => {
      const res = await fetch(api)
      const data = await res.json()
      setUsers(data)
    }
    fetchAPI(API)
  }, [])

  const setForm = () => {
    setPage('form')
  }

  const setContact = () => {
    setPage('list')
  }

  return (
    <>
      <Nav setContact={setContact} setForm={setForm} />
      <main>
        {page === 'list' && <Contacts users={users} setUsers={setUsers} />}
        {page === 'form' && <Form users={users} setUsers={setUsers} setContact={setContact} />}
      </main>
    </>
  )
}

export default App
