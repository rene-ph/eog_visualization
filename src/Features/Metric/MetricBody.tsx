import React, { FC } from 'react';
import {
  Grid,
} from '@material-ui/core';
import {
  Chart,
  CardMetric,
} from '../../components/_index';
import { MetricTypes } from '../../components/CardMetric/Types';

const MetricHeader: FC<any> = ({ lstMetric }) => (
  <Grid container>
    <Grid item xs={3} lg={3}>
      { lstMetric.map(
        (currentMetric: MetricTypes) => (
          <CardMetric
            metricType={currentMetric}
            key={currentMetric}
          />
        ),
      )}
    </Grid>
    <Grid item xs={9} lg={9}>
      <Chart />
    </Grid>
  </Grid>
);

export default MetricHeader;
