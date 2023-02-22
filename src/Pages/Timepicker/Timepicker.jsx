import { TextField } from '@mui/material';
import { LocalizationProvider, MobileDatePicker, MobileTimePicker, TimePicker } from '@mui/x-date-pickers';
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function Timepicker() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(dayjs('2022-04-07'));

  return (
    <Fragment>
      <br />
      <br />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          label="For mobile"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />

        <br />
        <br />
        <MobileTimePicker
          label="For mobile"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker value={value} onChange={setValue} renderInput={(params) => <TextField {...params} />} />
      </LocalizationProvider>

      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Home
      </button>
    </Fragment>
  );
}

export default Timepicker;
