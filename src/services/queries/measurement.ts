import { gql } from '@apollo/client';

export const getLastKnownMeasurement = gql`
  query($metricName: String!) {
    getLastKnownMeasurement(metricName: $metricName) {
        value
        at
        metric
        unit
    }
  }
`;
