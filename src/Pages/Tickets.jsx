import React, { Fragment, useState } from 'react';
import { Button, styled, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import './tickets.css';
import { Link } from 'react-router-dom';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import TableSortLabel from '@mui/material/TableSortLabel';
import { Container } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import WarningIcon from '../Assets/Images/Logo.jpg';
import axios from 'axios';

const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
  background: 'linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)',
}));

const headCells = [
  {
    id: 'id',
    numeric: true,
    label: 'Order ID',
  },
  {
    id: 'orderName',
    numeric: false,
    label: 'Order Name',
  },
  {
    id: 'orderDescription',
    numeric: false,
    label: 'Order Description',
  },
  {
    id: 'category',
    numeric: false,
    label: 'Category',
  },
  {
    id: 'date',
    numeric: false,
    label: 'Date',
  },
];

// const dataTable = [
//   {
//     id: '20',
//     subjects: 'Host 14 is Down',
//     assigned: 'regingeorgius',
//     status: 'Selected',
//     client: 'ITB',
//     priority: 'Critical',
//   },
//   {
//     id: '21',
//     subjects: 'Ubuntu hardening',
//     assigned: 'tono36',
//     status: 'Done',
//     client: 'BRI',
//     priority: 'Medium',
//   },
//   {
//     id: '22',
//     subjects: 'Host 17 is out of memory ',
//     assigned: 'smith39',
//     status: 'To-Do',
//     client: 'ITB',
//     priority: 'High',
//   },
//   {
//     id: '23',
//     subjects: 'Kubernetes is Down',
//     assigned: 'smith39',
//     status: 'In-Progress',
//     client: 'ITB',
//     priority: 'Low',
//   },
// ];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function RowItem(props) {
  const [openCell, setOpenCell] = React.useState(false);
  const [data, setData] = React.useState(props.orderData);
  const [open, setOpen] = useState(false);

  function handleDeleteClick() {
    setOpen(true);
  }

  function handleDeleteConfirm() {
    // Perform the deletion action here
    setOpen(false);
  }

  function handleDeleteCancel() {
    setOpen(false);
  }

  // const handleDeleteClick = () => {
  //   setOpen(true);
  //   // setData((prevData) => prevData.filter((item) => item.id !== id));

  //   function handleDeleteConfirm() {
  //     // Perform the deletion action here
  //     setOpen(false);
  //   }

  //   function handleDeleteCancel() {
  //     setOpen(false);
  //   }

  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`/api/tickets/${props.item.id}`);
  //     setTickets(prevTickets => prevTickets.filter(ticket => ticket.id !== props.item.id));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleDeleteTickets = async (id) => {
    try {
      const res = await axios({
        method: 'DELETE',
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
        url: `https://643437481c5ed06c9592229a.mockapi.io/api/v1/FormOrder/${id}`,
      });
      console.log(res.data.data);
      props.getAllTickets();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <TableRow hover>
        <TableCell align="center">{props.item.id}</TableCell>
        <TableCell align="center">{props.item.orderName}</TableCell>
        <TableCell align="center">{props.item.orderDescription}</TableCell>
        <TableCell
          align="center"
          sx={{
            color:
              props.item.category === 'Category 1'
                ? 'black'
                : props.item.category === 'Category 2'
                ? 'red'
                : props.item.category === 'Category 3'
                ? '#FF8A00'
                : props.item.category === 'Category 4'
                ? '#1B8500'
                : 'none',
          }}
        >
          {props.item.category}
        </TableCell>
        <TableCell align="center">{props.item.date}</TableCell>
        <TableCell align="center" sx={{}}>
          <div
            style={{
              height: '17px',
              width: '17px',
              backgroundColor:
                props.item.priority === 'Critical'
                  ? 'red'
                  : props.item.priority === 'High'
                  ? 'orange'
                  : props.item.priority === 'Medium'
                  ? 'yellow'
                  : props.item.priority === 'Low'
                  ? 'green'
                  : 'none',
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '5px',
            }}
          ></div>
          {props.item.priority}
        </TableCell>
        <TableCell align="center">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button variant="outlined" color="secondary" size="small" onClick={() => handleDeleteClick(props.item.id)}>
              Delete
            </Button>
            <Dialog open={open} onClose={handleDeleteCancel}>
              <DialogContent sx={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={WarningIcon}
                  alt="Logo"
                  style={{
                    height: '75px',

                    width: '80px',
                  }}
                />
              </DialogContent>
              <DialogTitleStyled>Are you sure you want to delete this item?</DialogTitleStyled>
              <DialogActions>
                <Button
                  onClick={handleDeleteCancel}
                  sx={{
                    backgroundColor: 'grey',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: 'grey',
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    handleDeleteTickets(props.item.id);
                    handleDeleteConfirm();
                  }}
                  sx={{
                    backgroundColor: '#FF0000',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: 'red',
                    },
                  }}
                >
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
            <Link to={`DetailTickets/`} style={{ textDecoration: 'none', marginLeft: '8px' }}>
              {/* <Link to={`DetailTickets/${props.item.id}`} style={{ textDecoration: 'none', marginLeft: '8px' }}> */}
              <Button variant="outlined" size="small" color="primary">
                View
              </Button>
            </Link>
            <Link to={`/EditTickets/${props.item.id}`} style={{ textDecoration: 'none', marginLeft: '8px' }}>
              {/* <Link to={`DetailTickets/${props.item.id}`} style={{ textDecoration: 'none', marginLeft: '8px' }}> */}
              <Button variant="outlined" size="small" color="primary">
                Edit
              </Button>
            </Link>

            {/* <Link
                to={`/tickets/${props.item.id}`}
                style={{ textDecoration: 'none', marginLeft: theme.spacing(1) }}
              >
                <Button
                  variant='outlined'
                  color='primary'
                  startIcon={<ViewListOutlinedIcon />}
                >
                  View
                </Button>
              </Link> */}
          </Box>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const Tickets = () => {
  const theme = useTheme();
  const [statusTicket, setStatusTicket] = React.useState('ALL');
  React.useEffect(() => {
    document.title = 'Menu Tickets';
    getAllTickets();
  }, []);
  const [orderData, setOrderData] = React.useState([]);

  const ToggleButton = styled(MuiToggleButton)({
    '&.Mui-selected, &.Mui-selected:hover': {
      color: '#000000  !important',
      backgroundColor: '#F5B6FF',
    },
  });

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getAllTickets = async () => {
    try {
      const res = await axios({
        method: 'GET',
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
        url: `https://643437481c5ed06c9592229a.mockapi.io/api/v1/FormOrder`,
      });
      setOrderData(res.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="induk-toglee">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} xl={4} className="induk-togle1">
            <ToggleButtonGroup
              value={statusTicket}
              color="primary"
              exclusive
              onChange={(event, value) => {
                if (value) {
                  setStatusTicket(value);
                }
              }}
              sx={{
                // border: '1px solid #1F305C',
                [theme.breakpoints.down('sm')]: {
                  height: '35px !important',
                },
              }}
            >
              <ToggleButton value="ALL" sx={{ border: '1px solid rgba(0, 0, 0, 0.2)' }}>
                ALL
              </ToggleButton>
              <ToggleButton value="Selected" sx={{ border: '1px solid rgba(0, 0, 0, 0.2)' }}>
                Selected
              </ToggleButton>
              <ToggleButton value="To-Do" sx={{ border: '1px solid rgba(0, 0, 0, 0.2)' }}>
                To-Do
              </ToggleButton>
              <ToggleButton value="In-Progress" sx={{ border: '1px solid rgba(0, 0, 0, 0.2)' }}>
                In-Progress
              </ToggleButton>
              <ToggleButton value="Done" sx={{ border: '1px solid rgba(0, 0, 0, 0.2)' }}>
                Done
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>

          <Grid item md={6} xl={6} sm={6} className="induk-togle2">
            <Link to="/createTickets" style={{ textDecoration: 'none', color: 'black' }}>
              <Button
                variant="contained"
                sx={{
                  color: 'black',
                  background: '#FFFFFF',
                  height: '36px',
                  '&:hover': {
                    backgroundColor: 'white',
                  },
                }}
              >
                <AddCircleOutlineOutlinedIcon
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '2px',
                    cursor: 'pointer',
                    marginTop: '3.4px',
                    marginBottom: '5px',
                  }}
                />
                Create Tickets
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>

      <TableContainer sx={{ maxHeight: rowsPerPage !== 10 ? 800 : 'none' }}>
        <Table stickyHeader sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          {/* Table Header */}
          <TableHead>
            <TableRow>
              {/* {rowsPerPage.filter((e)=>{
             return statusTicket==='ALL'?true: e.status===statusTicket 
            }
            )  */}
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  align={headCell.numeric ? 'center' : 'center'}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={(event) => {
                      handleRequestSort(event, headCell.id);
                    }}
                    style={{ fontWeight: 'bold' }}
                  >
                    {headCell.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* Table Content */}
          <TableBody>
            {orderData.length === 0
              ? null
              : stableSort(
                  orderData.filter((e) => {
                    // return true
                    return statusTicket === 'ALL' ? true : e.status === statusTicket;
                    // if(e.status===statusTicket)
                  }),
                  getComparator(order, orderBy)
                )
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((rowItem, index) => {
                    return (
                      <RowItem key={rowItem.code} item={rowItem} orderData={orderData} getAllTickets={getAllTickets} />
                    );
                  })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Table Pagination */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <span>
          <Button sx={{ width: 'max-content' }}>Pagination 1 (1-100)</Button>
        </span>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={orderData.length === 0 ? null : orderData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            [theme.breakpoints.up('sm')]: { justifyContent: 'right' },
          }}
        />
      </Box>
    </Container>
  );
};

export default Tickets;
