import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = ({users, setUsers, modifiedUser, setModifiedUser}) => {

  const navigate = useNavigate()

  const nameRef = useRef(null)
  const userNameRef = useRef(null)
  const phoneRef = useRef(null)


  useEffect(() => {
    if(modifiedUser) {
      nameRef.current.value = modifiedUser.name;
      userNameRef.current.value = modifiedUser.username;
      phoneRef.current.value = modifiedUser.phone;
    }
  }, [])


  const clearForm = () => {
    nameRef.current.value = '';
    userNameRef.current.value = '';
    phoneRef.current.value = '';

    navigate('/')
  }

  const handleSave = (e) => {
    e.preventDefault()

    const editedUser = {
      id: modifiedUser ? modifiedUser.id : users.length === 0 ? 1 : users.length + 1,
      name: nameRef.current.value,
      username: userNameRef.current.value,
      phone: phoneRef.current.value,
    }

    let newUsers;

    if (modifiedUser) {
      newUsers = users.map((user) => {
        if (user.id === modifiedUser.id) {
          return { ...user, ...editedUser };
        }
        return user;
    });
      
    } else {
      newUsers = [...users, editedUser]
    }

    setUsers(newUsers)
    clearForm()
    setModifiedUser(null)
  }

  const handleCancel = (e) => {
    e.preventDefault()
    clearForm()
    setModifiedUser(null)
  }


  return (
    <div className='container'>
      <h2>Form</h2>

      {/* <button onClick={handleCheck}>B</button> */}

      <form className='form'>
        <label>
          Name:<br/>
          <input type="text" ref={nameRef} required />
        </label>

        <label>
          User name:<br />
          <input type="text" ref={userNameRef} required />
        </label>

        <label>
          Phone:<br />
          <input type='tel' ref={phoneRef} required />
        </label>

        <div className='btns'>
          <button onClick={(e) => handleSave(e)}>Save</button>
          <button onClick={(e) => handleCancel(e)}>Cancel</button>
        </div>
      </form>

    </div>
  )
}

export default Form