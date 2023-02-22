import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import AreaChart from './Chart List/AreaChart';
import DoughnutChart from './Chart List/DoughnutChart';
import HorizontalBarChart from './Chart List/HorizontalBarChart';
import LineChart from './Chart List/LineChart';
import PieChart from './Chart List/PieChart';
import StackedBarChart from './Chart List/StackedBarChart';
import VerticalBarChart from './Chart List/VerticalBarChart';

function Chart() {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div style={{ height: '300px' }}>
        <LineChart />
      </div>

      <div style={{ height: '300px' }}>
        <VerticalBarChart />
      </div>

      <div style={{ height: '300px' }}>
        <HorizontalBarChart />
      </div>

      <div style={{ height: '300px' }}>
        <StackedBarChart />
      </div>

      <div style={{ height: '300px' }}>
        <AreaChart />
      </div>

      <div style={{ height: '300px' }}>
        <PieChart />
      </div>

      <div style={{ height: '300px' }}>
        <DoughnutChart />
      </div>

      <br />
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Home
      </button>
    </Fragment>
  );
}

export default Chart;
