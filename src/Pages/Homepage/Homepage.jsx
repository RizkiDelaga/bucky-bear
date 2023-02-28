import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './Homepage.css';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import FirstPageOutlinedIcon from '@mui/icons-material/FirstPageOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

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
          navigate('/TableMUISelectSortFilter');
        }}
      >
        TableMUI Select Sort Filter
      </button>
      <button
        onClick={() => {
          navigate('/TableMUIOpenCell');
        }}
      >
        TableMUI Open Cell
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
      <button
        onClick={() => {
          navigate('/DashboardLayout');
        }}
      >
        DashboardLayout
      </button>

      <Button variant="primary" className="button-1">
        Primary
      </Button>
      <br />
      <br />
      <br />
      <div>
        <DashboardOutlinedIcon />
        <LibraryAddOutlinedIcon />
        <StoreOutlinedIcon />
        <ConfirmationNumberOutlinedIcon />
        <LocalAtmOutlinedIcon />

        <AccountCircleOutlinedIcon />
        <NotificationsActiveOutlinedIcon />
        <NotificationsNoneOutlinedIcon />

        <ArrowBackIosNewOutlinedIcon />
        <ArrowBackOutlinedIcon />
        <KeyboardDoubleArrowLeftOutlinedIcon />
        <ArrowLeftOutlinedIcon />
        <FirstPageOutlinedIcon />
        <MoreHorizOutlinedIcon />
        <MoreVertOutlinedIcon />
        <MessageOutlinedIcon />
        <EmailOutlinedIcon />
        <SendOutlinedIcon />
        <LocalPrintshopOutlinedIcon />
        <ShareOutlinedIcon />
        <StarOutlineOutlinedIcon />
        <StarHalfOutlinedIcon />
        <StarOutlinedIcon />
        <LocalActivityOutlinedIcon />
        <VisibilityOutlinedIcon />
        <VisibilityOffOutlinedIcon />
        <AccessTimeOutlinedIcon />
        <CalendarMonthOutlinedIcon />
        <ArrowDropDownOutlinedIcon />
        <ArrowForwardIosOutlinedIcon />
        <LocationOnOutlinedIcon />
        <ImageOutlinedIcon />
        <CopyrightOutlinedIcon />
        <ContentCopyOutlinedIcon />
        <FilterAltOutlinedIcon />
        <FilterListOutlinedIcon />
        <SortOutlinedIcon />
        <SearchOutlinedIcon />
        <AddOutlinedIcon />
        <ErrorOutlineOutlinedIcon />
        <ErrorOutlinedIcon />
        <RefreshOutlinedIcon />
        <EditIcon />
        <DeleteForeverIcon />
        <MenuIcon />
        <GroupsOutlinedIcon />
      </div>
    </Fragment>
  );
}

export default Homepage;
