import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './Homepage.css';

function Homepage() {
  const navigate = useNavigate();
  const [daftarPahlawan, setDaftarPahlawan] = useState([]);
  const [itWorks, setItWorks] = useState(false);

  React.useEffect(() => {
    document.title = 'Homepage | Netflix Clone';
    fetchDataPahlawan();
  }, []);

  const fetchDataPahlawan = async () => {
    const { data } = await axios.get('/api/heroes');

    setDaftarPahlawan(data);
    setItWorks(true);
  };

  return (
    <Fragment>
      <Header />
      <p>{itWorks ? daftarPahlawan[1].name : null}</p>
      <p>{itWorks ? daftarPahlawan[1].birth_year : null}</p>
      <p>{itWorks ? daftarPahlawan[1].death_year : null}</p>
      <p>{itWorks ? daftarPahlawan[1].description : null}</p>
      <p>{itWorks ? daftarPahlawan[1].ascension_year : null}</p>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p className="asd">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure cumque modi doloremque pariatur. Possimus
        esse saepe harum rem atque consectetur nesciunt voluptas quibusdam, quasi ratione ut deserunt nam consequatur.
      </p>
      <button
        onClick={() => {
          // navigate('/login');
          // console.log(daftarPahlawan);
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          navigate('/table');
        }}
      >
        Table
      </button>
      <button
        onClick={() => {
          navigate('/timepicker');
        }}
      >
        Time Picker
      </button>
      <button
        onClick={() => {
          navigate('/chart');
        }}
      >
        Chart
      </button>
      <button
        onClick={() => {
          navigate('/swiper');
        }}
      >
        swiper
      </button>

      <Button variant="primary" className="button-1">
        Primary
      </Button>
    </Fragment>
  );
}

export default Homepage;
