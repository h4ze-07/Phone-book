import React, { useRef } from 'react'

const Form = ({users, setUsers, setContact}) => {


  const nameRef = useRef(null)
  const userNameRef = useRef(null)
  const phoneRef = useRef(null)

  const clearForm = () => {
    nameRef.current.value = '';
    userNameRef.current.value = '';
    nameRef.current.value = '';

    setContact()
  }

  const handleSave = (e) => {
    e.preventDefault()
    const newUsers = [...users, {
      id: users.length === 0 ? 1 : users.length + 1,
      name: nameRef.current.value,
      username: userNameRef.current.value,
      phone: phoneRef.current.value,
    }]

    setUsers(newUsers)
    clearForm()
  }

  const handleCancel = (e) => {
    e.preventDefault()
    clearForm()
  }

  return (
    <div className='container'>
      <h2>Form</h2>

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