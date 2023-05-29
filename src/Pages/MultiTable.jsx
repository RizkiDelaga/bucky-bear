import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

function MultiTable() {
  const [button, setButton] = useState('Table 1');
  const [table1, setTable1] = useState([]);
  const [table2, setTable2] = useState([]);
  const [table3, setTable3] = useState([]);

  React.useEffect(() => {
    document.title = 'Multi Table';
    handleGetTable1();
  }, []);

  const handleGetTable1 = async (status) => {
    try {
      const res = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=7076af95ae7613e66826b21fe0031742&page=1`,
      });
      setTable1(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetTable2 = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=7076af95ae7613e66826b21fe0031742&page=2`,
      });
      setTable2(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetTable3 = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=7076af95ae7613e66826b21fe0031742&page=3`,
      });
      setTable3(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToggleButtonGroup value={button} exclusive onChange={(event, value) => setButton(value)}>
        <ToggleButton value="Table 1" onClick={handleGetTable1}>
          Table 1
        </ToggleButton>
        <ToggleButton value="Table 2" onClick={handleGetTable2}>
          Table 2
        </ToggleButton>
        <ToggleButton value="Table 3" onClick={handleGetTable3}>
          Table 3
        </ToggleButton>
      </ToggleButtonGroup>
      {button}

      {button !== 'Table 1'
        ? null
        : table1.map((item, index) => {
            return (
              <Box sx={{ backgroundColor: '#eeeeee', py: 2, px: 4, my: 1, mx: 2 }}>
                <h3>{item.original_title}</h3>
                <p>{item.overview}</p>
              </Box>
            );
          })}

      {button !== 'Table 2'
        ? null
        : table2.map((item, index) => {
            return (
              <Box sx={{ backgroundColor: '#eeeeee', py: 2, px: 4, my: 1, mx: 2 }}>
                <h3>{item.original_title}</h3>
                <p>{item.overview}</p>
                <p>{item.release_date}</p>
              </Box>
            );
          })}

      {button !== 'Table 3'
        ? null
        : table3.map((item, index) => {
            return (
              <Box sx={{ backgroundColor: '#eeeeee', py: 2, px: 4, my: 1, mx: 2 }}>
                <h3>{item.original_title}</h3>
                <p>{item.overview}</p>
              </Box>
            );
          })}
    </>
  );
}

export default MultiTable;
