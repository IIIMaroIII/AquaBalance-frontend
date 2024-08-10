import {
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
} from 'recharts';
import css from './ChartComponent.module.css';
import { useMediaQuery } from '@mui/material';

const CustomTooltip = ({ active = false, payload = [], coordinate }) => {
  if (active && payload && payload.length) {
    const { x, y } = coordinate;

    return (
      <svg
        className={css.tooltipIcon}
        width="80"
        height="48"
        style={{ left: x, top: y }}
      >
        <use href={'/sprite.svg#icon-Combined-Shape'}></use>
        <text className={css.label}>{`${payload[0].value * 1000} ml`}</text>
      </svg>
    );
  }
  return null;
};

const data = [
  { name: '16', value: 1.8 },
  { name: '17', value: 1.5 },
  { name: '18', value: 2 },
  { name: '19', value: 1.75 },
  { name: '20', value: 2.2 },
  { name: '21', value: 2.3 },
  { name: '22', value: 2.1 },
];

const ChartComponent = () => {
  const yTicks = Array.from({ length: 6 }, (_, i) => i * 0.5);

  const formatYAxis = tickItem => {
    if (tickItem === 0) {
      return '0%';
    }
    return `${tickItem} L`;
  };

  const isSmallScreen = useMediaQuery('(max-width:767px)');
  const isTabletScreen = useMediaQuery(
    '(min-width:768px) and (max-width:1439px)',
  );

  const yAxisPadding = isSmallScreen ? 5 : isTabletScreen ? 14 : 14;

  const tickStyle = {
    fontWeight: 400,
    lineHeight: isSmallScreen ? '129%' : '149%',
  };

  return (
    <div className={css.chartContainer}>
      <ResponsiveContainer width="100%" height={isSmallScreen ? 256 : 273}>
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="colorValue"
              x1="189.618"
              y1="207"
              x2="193.11"
              y2="7.79258"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9be1a0" stopOpacity={0} />
              <stop offset="1" stopColor="#9be1a0" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: '#323f47',
              fontSize: 15,
              ...tickStyle,
            }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={formatYAxis}
            ticks={yTicks}
            tick={{
              fill: '#323f47',
              fontSize: isSmallScreen ? 14 : 15,
              ...tickStyle,
            }}
            padding={{ bottom: yAxisPadding }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            dataKey="value"
            stroke="#87d28d"
            strokeWidth={isSmallScreen ? 2 : 3}
            fill="url(#colorValue)"
            dot={{
              r: isSmallScreen ? 6 : 9,
              stroke: '#87d28d',
              fill: '#ffffff',
              fillOpacity: 1,
              strokeWidth: isSmallScreen ? 2 : 3,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
