import React, { FC, useEffect } from 'react';
import {
  Grid,
} from '@material-ui/core';
import {
  ApolloProvider,
  useQuery,
} from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import { Client } from '../../services/client-apollo';
import { getMetrics } from '../../services/queries/metrics';
import { add } from '../../redux/slice/metrics.slice';
import { metric } from '../../redux/selector/metrics.selector';
import {
  Chart,
  MultiSelect,
  CardMetric,
} from '../../components/_index';

const Metric: FC = () => {
  const getMetric = useSelector(metric);
  const getMetricsData = useQuery<any>(getMetrics);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!getMetricsData.loading) {
      dispatch(add(getMetricsData.data.getMetrics));
    }
  }, [getMetricsData.data]);

  return (
    <Grid container>
      <Grid item xs={12} lg={12}>
        <MultiSelect
          listOfMetrics={getMetric}
          isLoading={getMetricsData.loading}
          hasError={getMetricsData.error}
        />
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
};

export default () => (
  <ApolloProvider client={Client}>
    <Metric />
  </ApolloProvider>
);
