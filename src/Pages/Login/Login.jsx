import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';

function Login() {
  const navigate = useNavigate();

  React.useEffect(() => {
    document.title = 'Login | Netflix Clone';
  }, []);

  return (
    <Fragment>
      <Header />
      <h1>Ini halaman Login</h1>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Balik Ke Homepage
      </button>
    </Fragment>
  );
}

export default Login;
