import React from 'react';
import styles from './UserInfo.module.css';

const UserInfo = ({ user, onEdit, onDelete, variant = 'primary' }) => {
  return (
    <div className={styles.userItem}>
      <ul>
        <li>Name: {user.name}</li>
        <li>Age: {user.age}</li>
        <li>Address: {user.address}</li>
        <li>Gender: {user.gender}</li>
      </ul>
      <div className={styles.buttons}>
        <button
          onClick={() => onEdit(user)}
          style={{ backgroundColor: variant === 'primary' ? '#28a745' : '#17a2b8' }}
          className={styles.button}
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(user.id)}
          style={{ backgroundColor: '#dc3545' }}
          className={styles.button}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserInfo;