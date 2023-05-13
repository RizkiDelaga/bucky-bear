import { Container, Grid, TextField } from '@mui/material';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [formLoginAdmin, setFormLoginAdmin] = useState({ name: '', password: '' });

  React.useEffect(() => {
    document.title = 'Login | Netflix Clone';
  }, []);

  const submitHandlerAdmin = async (data) => {
    try {
      const res = await axios({
        method: 'POST',
        url: `https://stg.capstone.adaptivenetworklab.org/api/member/admin-login/`,
        data: {
          username: data.name,
          password: data.password,
        },
      });
      console.log(res.data.data);
      localStorage.setItem('access_token', res.data.token);
      localStorage.setItem('role', res.data.data.role);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandlerEngineering = async () => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://stg.capstone.adaptivenetworklab.org/api/member/engineer-login',
        data: {
          username: 'toni29366',
          password: '081081081Zz!',
        },
      });
      console.log(res.data.data);
      localStorage.setItem('access_token', res.data.token);
      localStorage.setItem('role', res.data.data.role);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandlerUser = async () => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://stg.capstone.adaptivenetworklab.org/api/member/user-login',
        data: {
          username: 'regin090',
          password: 'Georgiu!1234',
        },
      });
      console.log(res.data.data);
      localStorage.setItem('access_token', res.data.token);
      localStorage.setItem('role', res.data.data.role);
      navigate('/');
    } catch (error) {
      console.log(error);
      localStorage.setItem('access_token', 'res.data.token');
      localStorage.setItem('role', 'user');
    }
  };

  return (
    <Fragment>
      <h1>Ini Halaman Login</h1>
      <TextField
        label="Username"
        variant="outlined"
        onChange={(e) => {
          setFormLoginAdmin({ ...formLoginAdmin, name: e.target.value });
        }}
      />
      <TextField
        label="Password"
        variant="outlined"
        onChange={(e) => {
          setFormLoginAdmin({ ...formLoginAdmin, password: e.target.value });
        }}
      />
      <button onClick={() => submitHandlerAdmin(formLoginAdmin)}>Login Admin</button>
      <br />
      <button onClick={submitHandlerEngineering}>Login Engineering</button>
      <button onClick={submitHandlerUser}>Login User</button>
    </Fragment>
  );
}

export default Login;
