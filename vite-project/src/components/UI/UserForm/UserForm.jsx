import React, { useState, useEffect, useRef } from 'react';
import styles from './UserForm.module.css';

const UserForm = ({ onSubmit, editingUser, variant = 'primary' }) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        address: '',
        gender: 'male'
    });

    const prevEditingUserRef = useRef(editingUser);

    useEffect(() => {
        if (editingUser !== prevEditingUserRef.current) {
            if (editingUser) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setFormData(editingUser);
            } else {
                setFormData({ name: '', age: '', address: '', gender: 'male' });
            }
            prevEditingUserRef.current = editingUser;
        }
    }, [editingUser]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label className={styles.label}>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Age</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className={styles.input}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Address</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={styles.input}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Gender</label>
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={styles.select}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <button
                type="submit"
                className={styles.button}
                style={{ backgroundColor: variant === 'primary' ? '#007bff' : '#ffc107' }}
            >
                {editingUser ? 'Update' : 'Save'}
            </button>
        </form>
    );
};

export default UserForm;