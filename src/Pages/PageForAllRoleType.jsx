import { Box } from '@mui/material';
import { Fragment } from 'react';

function PageForAllRoleType() {
  return (
    <Fragment>
      <h1>Halaman ini bisa diakses oleh semua role</h1>

      {localStorage.getItem('access_token') && localStorage.getItem('role') === 'admin' ? (
        <Box
          sx={{
            backgroundColor: 'greenyellow',
            width: 'fit-content',
            height: '100px',
            padding: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h4>Component yang hanya bisa diakses oleh role ADMIN</h4>
        </Box>
      ) : null}

      {localStorage.getItem('access_token') && localStorage.getItem('role') === 'engineer' ? (
        <Box
          sx={{
            backgroundColor: 'pink',
            width: 'fit-content',
            height: '100px',
            padding: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h4>Component yang hanya bisa diakses oleh role ENGINERING</h4>
        </Box>
      ) : null}

      {localStorage.getItem('access_token') && localStorage.getItem('role') === 'user' ? (
        <Box
          sx={{
            backgroundColor: 'grey',
            width: 'fit-content',
            height: '100px',
            padding: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h4>Component yang hanya bisa diakses oleh role USER</h4>
        </Box>
      ) : null}

      {localStorage.getItem('access_token') &&
      (localStorage.getItem('role') === 'admin' || localStorage.getItem('role') === 'engineer') ? (
        <Box
          sx={{
            backgroundColor: 'RED',
            width: 'fit-content',
            height: '100px',
            padding: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h4>Component yang hanya bisa diakses oleh role ADMIN & ENGINEERING</h4>
        </Box>
      ) : null}

      {localStorage.getItem('access_token') &&
      (localStorage.getItem('role') === 'admin' ||
        localStorage.getItem('role') === 'engineer' ||
        localStorage.getItem('role') === 'user') ? (
        <Box
          sx={{
            backgroundColor: 'blue',
            width: 'fit-content',
            height: '100px',
            padding: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h4>Component yang hanya bisa diakses oleh role ADMIN, ENGINEERING, & USER</h4>
        </Box>
      ) : null}
    </Fragment>
  );
}

export default PageForAllRoleType;
