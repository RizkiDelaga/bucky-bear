import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Login/Login';
import Table from './Pages/Table/Table';
import Timepicker from './Pages/Timepicker/Timepicker';
import Chart from './Pages/Chart/Chart';
import SwiperCarousel from './Pages/Swiper/Swiper';
import TableMUISelectSortFilter from './Pages/Table/TableMUISelectSortFilter';
import TableMUIOpenCell from './Pages/Table/TableMUIOpenCell';
import DashboardLayout from './Pages/DashboardLayout/DashboardLayout';
import Admin from './Pages/Admin';
import Engineering from './Pages/Engineering';
import User from './Pages/User';
import PageForAllRoleType from './Pages/PageForAllRoleType';
import Tickets from './Pages/Tickets';
import CreateTickets from './Pages/CreateTickets';
import EditTickets from './Pages/EditTickets';
import MultiTable from './Pages/MultiTable';

function App() {

  
  const HandleLoginSuccessfully = () => {
    if (localStorage.getItem("access_token")) {
        return <Navigate to={-1} replace />
    }
    return <Outlet />;
  }

  const ProtectedAdminRoute = () => {
    if (localStorage.getItem("access_token") && localStorage.getItem("role") === 'admin') {
      return <Outlet/>
    }
    return alert("Kamu bukan Admin!");
  }

  const ProtectedEngineeringRoute = () => {
    if (localStorage.getItem("access_token") && localStorage.getItem("role") === 'engineer') {
      return <Outlet/>
    }
    return <Navigate to="/" replace /> ;
  }

  const ProtectedUserRoute = () => {
    if (localStorage.getItem("access_token") && localStorage.getItem("role") === 'user') {
      return <Outlet/>
    }
    return <Navigate to="/" replace /> ;
  }

  const AllRoleCanAccess = () => {
    if (localStorage.getItem("access_token")) {
      return <Outlet/>
    }
    return <Navigate to="/login" replace /> ;
  }

  return (
    <Fragment>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="Tickets" element={<Tickets />} />
            <Route path="CreateTickets" element={<CreateTickets />} />
            <Route path="EditTickets/:id" element={<EditTickets />} />
            <Route path="MultiTable" element={<MultiTable />} />
            
            
            <Route element={<HandleLoginSuccessfully/>}>
              <Route path="login" element={<Login />} />
            </Route>

            <Route element={<AllRoleCanAccess/>}>
              <Route path="PageForAllRoleType" element={<PageForAllRoleType />} />
            </Route>

            <Route element={<ProtectedAdminRoute/>}>
              <Route path="Admin" element={<Admin />} />
            </Route>

            <Route element={<ProtectedEngineeringRoute/>}>
              <Route path="Engineering" element={<Engineering />} />
            </Route>

            <Route element={<ProtectedUserRoute/>}>
              <Route path="User" element={<User />} />  
            </Route>

            {/* <Route path="table" element={<Table />} />
            <Route path="TableMUIOpenCell" element={<TableMUIOpenCell />} />  
            <Route path="TableMUISelectSortFilter" element={<TableMUISelectSortFilter />} />
            <Route path="timepicker" element={<Timepicker />} />
            <Route path="chart" element={<Chart />} />
            <Route path="swiper" element={<SwiperCarousel />} />
            <Route path="DashboardLayout" element={<DashboardLayout />} /> */}
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
