import React, { FC, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import {
  Skeleton,
} from '@mui/material';
import {
  useQuery,
} from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { MeasurementDataResponse } from '../../services/entities/measurement';
import { getLastKnownMeasurement } from '../../services/queries/measurement';
import { add } from '../../redux/slice/graph.slice';
import { getGraphByType } from '../../redux/selector/graph.selector';
import CardMetricViewModel from './CardMetricViewModel';
import { useStyles } from './card-metric.styles';
import AlertMessage from '../AlertMessage/AlertMessage';
import { TypeError } from '../AlertMessage/Types';

const CardMetric: FC<CardMetricViewModel> = ({ metricType }) => {
  const classes = useStyles();
  const getDataByType = useSelector(getGraphByType(metricType));
  const dispatch = useDispatch();
  const metricName = metricType;

  const getMeasurement = useQuery<MeasurementDataResponse>(getLastKnownMeasurement, {
    variables: {
      metricName,
    },
    pollInterval: 1300,
  });

  useEffect(() => {
    if (getMeasurement.data) {
      const { data } = getMeasurement;
      const currentTimeOfMeasurement = (data
        ? data?.getLastKnownMeasurement.at : 0);
      const newMeasurement = {
        type: metricType,
        date: currentTimeOfMeasurement,
        value: data?.getLastKnownMeasurement.value,
      };
      dispatch(add(newMeasurement));
    }
  }, [metricType, getMeasurement.loading, getMeasurement.data]);

  if (getMeasurement.loading) return <Skeleton className={classes.root} animation="wave" variant="rectangular" width={250} height={150} />;
  if (getMeasurement.error) {
    return <AlertMessage message={getMeasurement.error} type={TypeError.error} />;
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h6'>
          {metricType}
        </Typography>
        <Typography variant='h3'>
          {getDataByType.length > 0 ? getDataByType[getDataByType.length - 1][metricType] : null}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardMetric;
