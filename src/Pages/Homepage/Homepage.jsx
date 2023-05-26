import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './Homepage.css';
import logo from '../../Assets/Images/Logo.jpg';
import { Box } from '@mui/material';

function Homepage() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  React.useEffect(() => {
    document.title = 'Homepage | Netflix Clone';
    handleGetMovie();
  }, []);

  const handleGetMovie = async (status) => {
    try {
      const res = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=7076af95ae7613e66826b21fe0031742&page=${
          status === 'prev' ? currentPage - 1 : currentPage + 1
        }`,
      });
      setMovie(res.data.results);
      if (status === 'prev') {
        setCurrentPage(currentPage - 1);
      } else {
        setCurrentPage(currentPage + 1);
      }
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <h1 style={{ textAlign: 'center' }}>Movie</h1>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button
          onClick={() => {
            if (currentPage !== 1) {
              handleGetMovie('prev');
            }
          }}
          disabled={currentPage === 1}
        >
          Previous Page
        </Button>
        <Button
          onClick={() => {
            handleGetMovie();
          }}
        >
          Next Page
        </Button>
      </Box>
      {movie.map((item, index) => {
        return (
          <Box sx={{ backgroundColor: '#EEEEEE', py: 2, px: 4, my: 1, mx: 2 }}>
            <h4>
              {index + 1}. {item.original_title}
            </h4>
            <div>{item.overview}</div>
          </Box>
        );
      })}

      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          navigate('/Login');
        }}
      >
        Halaman Login
      </button>

      <button
        onClick={() => {
          localStorage.removeItem('access_token');
          localStorage.removeItem('role');
        }}
      >
        Logout
      </button>

      <br />
      <br />

      <button
        onClick={() => {
          navigate('/Admin');
        }}
      >
        Halaman Admin
      </button>
      <button
        onClick={() => {
          navigate('/User');
        }}
      >
        Halaman User
      </button>
      <button
        onClick={() => {
          navigate('/Engineering');
        }}
      >
        Halaman Engineering
      </button>
      <button
        onClick={() => {
          navigate('/PageForAllRoleType');
        }}
      >
        Semua Role Bisa Mengakses Halaman Ini
      </button>
      <br />
      <button
        onClick={() => {
          navigate('/Tickets');
        }}
      >
        Tickets
      </button>
    </Fragment>
  );
}

export default Homepage;
