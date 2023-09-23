import React from 'react'

const Contacts = ({users, setUsers}) => {

  const handleDelete = (id) => {

    let newUsers = users.filter((user) => {
      return user.id !== id
    })

    setUsers(newUsers)
  }


  return (
    <div className='container'>
      <h2>List of contacts</h2>

      {
        users.length > 0 &&
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      }

      {users.length === 0 &&
        <div>
            Contact list is empty
        </div>
      }
    </div>
  )
}

export default Contacts