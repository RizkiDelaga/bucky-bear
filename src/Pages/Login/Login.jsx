import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './styles.css';

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

      <br />
      <hr />
      <div className="flex-div">
        <div className="flex1">
          <div className="flex-child">
            <h2>Lorem, ipsum.</h2>
            <h2>Lorem, ipsum.</h2>
            <h2>Lorem, ipsum.</h2>
            <h2>Lorem, ipsum.</h2>
          </div>
          <div>
            <h2>Lorem, ipsum.</h2>
            <h2>Lorem, ipsum.</h2>
            <h2>Lorem, ipsum.</h2>
            <h2>Lorem, ipsum.</h2>
          </div>
          <div>
            <h2>Lorem, ipsum.</h2>
            <h2>Lorem, ipsum.</h2>
            <h2>Lorem, ipsum.</h2>
            <h2>Lorem, ipsum.</h2>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
      </div>

      <div className="card-example">
        <h1>Lorem ipsum</h1>
        <h3>12</h3>
      </div>

      <div style={{ marginTop: '300px' }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consectetur, eius libero fugit esse mollitia
          incidunt ipsam labore est alias impedit perferendis a velit neque fugiat placeat nemo unde natus!
        </p>
      </div>
    </Fragment>
  );
}

export default Login;
