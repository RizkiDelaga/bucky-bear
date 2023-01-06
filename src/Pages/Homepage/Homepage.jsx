import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './Homepage.css';

function Homepage() {
  const navigate = useNavigate();

  React.useEffect(() => {
    document.title = 'Homepage | Netflix Clone';
  }, []);

  return (
    <Fragment>
      <Header />
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p className="asd">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure cumque modi doloremque pariatur. Possimus
        esse saepe harum rem atque consectetur nesciunt voluptas quibusdam, quasi ratione ut deserunt nam consequatur.
      </p>
      <button
        onClick={() => {
          navigate('/login');
        }}
      >
        Login
      </button>

      <Button variant="primary" className="button-1">
        Primary
      </Button>
    </Fragment>
  );
}

export default Homepage;
