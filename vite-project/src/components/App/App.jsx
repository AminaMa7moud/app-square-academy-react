import React, { useState } from 'react';
import { UserForm, UserList } from '../UI';
import Container from '../layout/Container/Container';
import styles from './App.module.css';

const App = () => {
  const [users, setUsers] = useState([
    { id: '1', name: 'Ali', age: '20', address: 'Cairo', gender: 'male' },
    { id: '2', name: 'Mona', age: '20', address: 'Tanta', gender: 'female' },
    { id: '3', name: 'Ahmed', age: '20', address: 'Mansoura', gender: 'male' },
  ]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (userData) => {
    const newUser = { ...userData, id: Date.now().toString() };
    setUsers([...users, newUser]);
    setEditingUser(null);
  };

  const updateUser = (userData) => {
    setUsers(users.map(user => user.id === userData.id ? userData : user));
    setEditingUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
    if (editingUser?.id === id) setEditingUser(null);
  };

  const handleFormSubmit = (formData) => {
    if (editingUser) {
      updateUser({ ...formData, id: editingUser.id });
    } else {
      addUser(formData);
    }
  };

  return (
    <Container>
      <h1 className={styles.appHeader}>Students</h1>
      <UserForm
        onSubmit={handleFormSubmit}
        editingUser={editingUser}
        variant={editingUser ? 'secondary' : 'primary'}
      />
      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={deleteUser}
      />
    </Container>
  );
};

export default App;