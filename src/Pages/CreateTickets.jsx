import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import { Fragment, useState } from 'react';
import { LocalizationProvider, MobileDatePicker, MobileTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

function CreateTickets() {
  const navigate = useNavigate();
  const [formCreate, setFormCreate] = useState({
    orderName: '',
    orderDescription: '',
    category: '',
    date: dayjs(),
  });

  const handleCreateTickets = async (data) => {
    try {
      const res = await axios({
        method: 'POST',
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
        url: `https://643437481c5ed06c9592229a.mockapi.io/api/v1/FormOrder`,
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
      <h1>Ini halaman CreateTickets</h1>
      <div style={{ display: 'flex' }}>
        <TextField
          label="Name Product"
          variant="outlined"
          onChange={(e) => {
            setFormCreate({ ...formCreate, orderName: e.target.value });
          }}
        />
        <TextField
          label="Description"
          variant="outlined"
          onChange={(e) => {
            setFormCreate({ ...formCreate, orderDescription: e.target.value });
          }}
        />
        <span>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            onChange={(e) => {
              setFormCreate({ ...formCreate, category: e.target.value });
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
            value={formCreate.date}
            onChange={(value) => {
              setFormCreate({ ...formCreate, date: dayjs(value) });

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
          handleCreateTickets(formCreate);
        }}
      >
        Tickets
      </button>
    </Fragment>
  );
}

export default CreateTickets;
