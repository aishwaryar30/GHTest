import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { login } = useContext(AuthContext);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      login(res.data.user, res.data.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="username" placeholder="Username" onChange={onChange} />
      <input type="password" name="password" placeholder="Password" onChange={onChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
