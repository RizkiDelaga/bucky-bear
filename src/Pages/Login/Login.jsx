import { Container, Grid } from '@mui/material';
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
      {/* <Header />
      <h1>Ini halaman Login</h1> */}
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Balik Ke Homepage
      </button>

      {/* <br />
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
      </div> */}

      <div style={{ display: 'flex' }}></div>

      <Container>
        <Grid container spacing={5}>
          <Grid item md xl={4} xs={6} className="centerGrid">
            <div className="card-example">
              <h1>Lorem ipsum</h1>
              <h3>12</h3>
            </div>
          </Grid>
          <Grid item md xl={4} xs={6} className="centerGrid">
            <div className="card-example">
              <h1>Lorem ipsum</h1>
              <h3>12</h3>
            </div>
          </Grid>
          <Grid item md xl={4} xs={6} className="centerGrid">
            <div className="card-example">
              <h1>Lorem ipsum</h1>
              <h3>12</h3>
            </div>
          </Grid>
          <Grid item md xl={4} xs={6} className="centerGrid">
            <div className="card-example">
              <h1>Lorem ipsum</h1>
              <h3>12</h3>
            </div>
          </Grid>
          <Grid item md xl={4} xs={6} className="centerGrid">
            <div className="card-example">
              <h1>Lorem ipsum</h1>
              <h3>12</h3>
            </div>
          </Grid>
        </Grid>
      </Container>

      
    </Fragment>
  );
}

export default Login;
