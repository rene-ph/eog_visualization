import React, { FC, useState, useEffect } from 'react';
import {
  Alert,
  Snackbar,
} from '@mui/material';
import AlertMessageViewModel from './AlertMessageViewModel';

const AlertMessage: FC<AlertMessageViewModel> = ({ message, type }) => {
  const [openModal, setOpenModal] = useState<boolean>(true);
  const autoHideModal = () => {
    setTimeout(() => {
      setOpenModal(false);
    }, 1500);
  };

  useEffect(() => {
    autoHideModal();
  }, []);

  return (
    <Snackbar open={openModal} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Alert severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertMessage;
