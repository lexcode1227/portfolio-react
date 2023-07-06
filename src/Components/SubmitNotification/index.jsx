import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const SubmitNotification = ({snackbarOpen, setSnackbarOpen, snackbarMessage}) => {
  return (
    <Snackbar open={snackbarOpen} autoHideDuration={1500} onClose={() => setSnackbarOpen(false)} >
        <MuiAlert onClose={() => setSnackbarOpen(false)} severity="success" elevation={6} variant="filled">
          {snackbarMessage}
        </MuiAlert>
    </Snackbar>
  )
};

export default SubmitNotification;