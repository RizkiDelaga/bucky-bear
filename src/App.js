import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Login/Login';
import Table from './Pages/Table/Table';
import Timepicker from './Pages/Timepicker/Timepicker';

function App() {

  return (
    <Fragment>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="login" element={<Login />} />
            <Route path="table" element={<Table />} />
            <Route path="timepicker" element={<Timepicker />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
