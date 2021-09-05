import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './Chart.css';

export default function Chart({
  title,
  data,
  xDatakey,
  lineDataKey,
  grid = null,
}) {
  return (
    <div className='chart'>
      <h3 className='chart-title'>{title}</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey={xDatakey} stroke='#5550bd' />

          <Line
            type='monotone'
            dataKey={lineDataKey}
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
          <Tooltip />
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
