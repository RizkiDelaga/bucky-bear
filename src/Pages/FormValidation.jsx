import {
  Alert,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { Fragment, useState } from 'react';
import { LocalizationProvider, MobileDatePicker, MobileTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

function FormValidation() {
  const navigate = useNavigate();
  const [formValidation, setFormValidation] = useState({
    numberOnly: '',
    email: '',
    password: '',
    files: { file: null, fileName: null },
    category: '',
    date: dayjs(),
  });

  const [showPassword, setShowPassword] = useState(false);

  const AlertValidation = () => {
    return (
      <div style={{ display: 'none' }}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
      </div>
    );
  };

  return (
    <Fragment>
      <h1>Ini halaman Validasi Form</h1>
      <AlertValidation />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('click');
          if (formValidation.numberOnly) {
          }
        }}
      >
        <div style={{ display: 'flex' }}>
          <TextField
            required
            label="Number Only"
            type="number"
            variant="outlined"
            onChange={(e) => {
              setFormValidation({ ...formValidation, numberOnly: e.target.value });
            }}
          />
          <TextField
            required
            label="Email"
            type="email"
            variant="outlined"
            onChange={(e) => {
              setFormValidation({ ...formValidation, email: e.target.value });
            }}
          />
          <FormControl
            variant="outlined"
            onChange={(e) => {
              setFormValidation({ ...formValidation, password: e.target.value });
            }}
            sx={{ width: '100%' }}
          >
            <InputLabel htmlFor="input-password">Password *</InputLabel>
            <OutlinedInput
              required
              label="Password"
              id="input-password"
              type={showPassword ? 'text' : 'password'}
              inputProps={{
                // pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$',
                // onInvalid: 'this.setCustomValidity("data tidak boleh kosong")',
                // onInput: "setCustomValidity('')",
                pattern: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$', // Minimal delapan karakter (Setidaknya satu huruf besar, satu huruf kecil dan satu angka)
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" color="primary">
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <span>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
              onChange={(e) => {
                setFormValidation({ ...formValidation, category: e.target.value });
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
              value={formValidation.date}
              onChange={(value) => {
                setFormValidation({ ...formValidation, date: dayjs(value) });

                console.log('Tanggal: ' + value.$D);
                console.log('Bulan: ' + value.$M);
                console.log('Tahun: ' + value.$y);
                // setLoading(false);
              }}
              renderInput={(params) => <TextField {...params} required />}
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
        <input
          required
          type="file"
          accept="image/*"
          onChange={(e) => {
            console.log(e.target.files[0].size);
            if (e.target.files[0].size < 5000000) {
              setFormValidation({
                ...formValidation,
                files: {
                  img: e.target.files[0],
                  fileName: !e.target.files[0] ? null : e.target.files[0].name,
                },
              });
            } else {
              setFormValidation({
                ...formValidation,
                files: {
                  img: null,
                  fileName: null,
                },
              });
            }
            // console.log(image);
          }}
          // hidden
        />
        {formValidation.files.fileName}

        <button
          type="sumbit"
          // onClick={() => {
          //   //   handleCreateTickets(formCreate);

          // }}
        >
          Validation this Form
        </button>
      </form>
    </Fragment>
  );
}

export default FormValidation;
