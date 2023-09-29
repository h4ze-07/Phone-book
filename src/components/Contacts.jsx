import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Modal({ setModal, confirmDelete, id }) {
  const handleDelete = () => {
    confirmDelete(id);
    setModal(false);
  };

  const handleKeep = () => {
    setModal(false);
  };

  return (
    <div className='modal'>
      <section className='innerModal'>
        <p>Are you sure you want to delete this contact?</p>
        <div className='modal-btns'>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleKeep}>Keep</button>
        </div>
      </section>
    </div>
  );
}

const Contacts = ({ users, setUsers, handleModifiedUser }) => {

  const navigate = useNavigate()

  const [modal, setModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const handleDelete = (id) => {
    setModal(true);
    setContactToDelete(id);
  };

  const confirmDelete = (id) => {
    if (id) {
      const newUsers = users.filter((user) => user.id !== id);
      setUsers(newUsers);
    }
    setContactToDelete(null);
    setModal(false);
  };


  const handleUpdate = (id) => {
    let updatedUser = {}

    for (let i of users) {
      if (i.id === id) {
        updatedUser.id = i.id;
        updatedUser.name = i.name;
        updatedUser.username = i.username;
        updatedUser.phone = i.phone;
      }
    }

    handleModifiedUser(updatedUser)
    
    navigate('/form')
  }




  return (
    <div className='container'>
      <h2>List of contacts</h2>

      {modal && (
        <Modal
          setModal={setModal}
          confirmDelete={confirmDelete}
          id={contactToDelete}
        />
      )}

      {users.length > 0 ? (
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
                  <button onClick={() => handleUpdate(user.id)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Contact list is empty</div>
      )}
    </div>
  );
};

export default Contacts;