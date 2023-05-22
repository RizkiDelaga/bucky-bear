import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { LocalizationProvider, MobileDatePicker, MobileTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useNavigate, useParams } from 'react-router-dom';

function EditTickets() {
  const navigate = useNavigate();

  let { id } = useParams();

  const [formEdit, setFormEdit] = useState({
    id: null,
    orderName: '',
    orderDescription: '',
    category: '',
    date: dayjs(),
  });

  React.useEffect(() => {
    document.title = 'Edit';
    getAllTickets(id);
  }, []);

  const getAllTickets = async (id) => {
    try {
      const res = await axios({
        method: 'GET',
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
        url: `https://643437481c5ed06c9592229a.mockapi.io/api/v1/FormOrder/${id}`,
      });
      setFormEdit({
        id: res.data.id,
        orderName: res.data.orderName,
        orderDescription: res.data.orderDescription,
        category: res.data.category,
        date: res.data.date,
      });
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditTickets = async (data) => {
    try {
      const res = await axios({
        method: 'PUT',
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
        url: `https://643437481c5ed06c9592229a.mockapi.io/api/v1/FormOrder/${data.id}`,
        data: data,
      });
      console.log(res.data.data);
      navigate('/Tickets');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <h1>Ini halaman EditTickets</h1>
      <div style={{ display: 'flex' }}>
        <TextField
          label="Name Product"
          variant="outlined"
          value={formEdit.orderName}
          onChange={(e) => {
            setFormEdit({ ...formEdit, orderName: e.target.value });
          }}
        />
        <TextField
          label="Description"
          variant="outlined"
          value={formEdit.orderDescription}
          onChange={(e) => {
            setFormEdit({ ...formEdit, orderDescription: e.target.value });
          }}
        />
        <span>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            value={formEdit.category}
            onChange={(e) => {
              setFormEdit({ ...formEdit, category: e.target.value });
            }}
            sx={{ width: '100%' }}
          >
            <MenuItem value={'Category 1'}>Category 1</MenuItem>
            <MenuItem value={'Category 2'}>Category 2</MenuItem>
            <MenuItem value={'Category 3'}>Category 3</MenuItem>
            <MenuItem value={'Category 4'}>Category 4</MenuItem>
          </Select>
        </span>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* Input Date */}
          <MobileDatePicker
            label="Pilih Tanggal"
            value={formEdit.date}
            onChange={(value) => {
              setFormEdit({ ...formEdit, date: dayjs(value) });

              console.log('Tanggal: ' + value.$D);
              console.log('Bulan: ' + value.$M);
              console.log('Tahun: ' + value.$y);
              // setLoading(false);
            }}
            renderInput={(params) => <TextField {...params} />}
            slotProps={{
              textField: {
                // helperText: 'MM / DD / YYYY',
              },
            }}
            sx={{
              width: '100%',
              '& .MuiDialog-root .MuiModal-root .css-3dah0e-MuiModal-root-MuiDialog-root': {
                zIndex: 100000,
              },
            }}
          />
        </LocalizationProvider>
      </div>

      <button
        onClick={() => {
          handleEditTickets(formEdit);
        }}
      >
        Tickets
      </button>
    </Fragment>
  );
}

export default EditTickets;
