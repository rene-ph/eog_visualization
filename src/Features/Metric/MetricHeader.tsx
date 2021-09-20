import React, { FC } from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';

const MetricHeader: FC<any> = ({ message }) => (
  <Grid item xs={12} lg={12}>
    <Typography variant="h5"> {message} </Typography>
  </Grid>
);

export default MetricHeader;
