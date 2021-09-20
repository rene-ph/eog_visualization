import React, { FC } from 'react';
import {
  Grid,
} from '@material-ui/core';
import {
  Chart,
  MultiSelect,
  CardMetric,
} from '../../components/_index';

const Metric: FC = () => (
  <Grid container>
    <Grid item xs={12} lg={12}>
      <MultiSelect />
    </Grid>
    <Grid container>
      <Grid item xs={3} lg={3}>
        <CardMetric />
      </Grid>
      <Grid item xs={9} lg={9}>
        <Chart />
      </Grid>
    </Grid>
  </Grid>
);

export default Metric;
