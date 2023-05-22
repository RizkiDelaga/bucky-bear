import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './Homepage.css';
import logo from '../../Assets/Images/Logo.jpg';

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

import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import TypeSpecimenIcon from '@mui/icons-material/TypeSpecimen';
import InfoIcon from '@mui/icons-material/Info';
import PaymentIcon from '@mui/icons-material/Payment';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ContactsIcon from '@mui/icons-material/Contacts';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QuizIcon from '@mui/icons-material/Quiz';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CollectionsIcon from '@mui/icons-material/Collections';
import HistoryIcon from '@mui/icons-material/History';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Hidden } from '@mui/material';

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

  const submitHandler = async () => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://stg.capstone.adaptivenetworklab.org/api/member/admin-login',
        data: {
          username: 'regin090',
          password: 'Georgiu!1234',
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
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
