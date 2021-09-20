import React, { FC } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { useSelector } from 'react-redux';
import { xAxisTickFormatter } from '../../utils/time';
import { getGraphByType } from '../../redux/selector/graph.selector';

const Chart: FC = () => {
  const casingPressureGraph = useSelector(getGraphByType('casingPressure'));
  const oilTempGraph = useSelector(getGraphByType('oilTemp'));
  const tubingPressureGraph = useSelector(getGraphByType('tubingPressure'));
  const flareTempGraph = useSelector(getGraphByType('flareTemp'));
  const waterTempGraph = useSelector(getGraphByType('waterTemp'));
  const injValveOpenGraph = useSelector(getGraphByType('injValveOpen'));

  return (
    <LineChart width={1200} height={800}>
      <Line data={casingPressureGraph} type="monotone" dataKey='casingPressure' stroke='#3bbfbf' />
      <Line data={oilTempGraph} type="monotone" dataKey='oilTemp' stroke='#0e3336' />
      <Line data={tubingPressureGraph} type="monotone" dataKey='tubingPressure' stroke='#ff6600' />
      <Line data={flareTempGraph} type="monotone" dataKey='flareTemp' stroke='#660000' />
      <Line data={waterTempGraph} type="monotone" dataKey='waterTemp' stroke='#cdc5bf' />
      <Line data={injValveOpenGraph} type="monotone" dataKey='injValveOpen' stroke='#030303' />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="dateFormatted" tickFormatter={xAxisTickFormatter} />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default Chart;
