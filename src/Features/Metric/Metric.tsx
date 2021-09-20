import React, { FC, useEffect, useState } from 'react';
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
import { metric, selectedMetric } from '../../redux/selector/metrics.selector';
import { MultiSelect } from '../../components/_index';
import MetricHeader from './MetricHeader';
import MetricBody from './MetricBody';

const Metric: FC = () => {
  const getMetric = useSelector(metric);
  const getSelectedMetric = useSelector(selectedMetric);
  const getMetricsData = useQuery<any>(getMetrics);
  const dispatch = useDispatch();
  const [hasMetricBeenSelected, setHasMetricBeenSelected] = useState<boolean>(false);

  useEffect(() => {
    if (!getMetricsData.loading) {
      dispatch(add(getMetricsData.data.getMetrics));
    }
  }, [getMetricsData.data]);

  useEffect(() => {
    setHasMetricBeenSelected((getSelectedMetric.length !== 0));
  }, [getSelectedMetric]);

  return (
    <Grid container>
      {
        !hasMetricBeenSelected ? (
          <MetricHeader message='Please select a new type' />
        ) : null
      }
      <Grid item xs={12} lg={12}>
        <MultiSelect
          listOfMetrics={getMetric}
          isLoading={getMetricsData.loading}
          hasError={getMetricsData.error}
        />
      </Grid>
      {
        hasMetricBeenSelected ? (
          <MetricBody lstMetric={getSelectedMetric} />
        ) : null
      }
    </Grid>
  );
};

export default () => (
  <ApolloProvider client={Client}>
    <Metric />
  </ApolloProvider>
);
