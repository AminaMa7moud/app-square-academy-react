import React from 'react';
import UserInfo from '../Userinfo/Userinfo';
import styles from './UserList.module.css';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className={styles.userList}>
      {users.map(user => (
        <UserInfo
          key={user.id}
          user={user}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default UserList;