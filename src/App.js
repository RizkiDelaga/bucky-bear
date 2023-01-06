import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Login/Login';

function App() {

  return (
    <Fragment>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
