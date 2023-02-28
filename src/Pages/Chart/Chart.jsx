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

  // #D32F2F
  // #1F305C
  return (
    <Fragment>
      <div style={{ margin: '40px' }}>
        <div style={{ height: '300px' }}>
          <LineChart />
        </div>
        <br />

        <div style={{ height: '300px' }}>
          <VerticalBarChart />
        </div>
        <br />

        <div style={{ height: '300px' }}>
          <HorizontalBarChart />
        </div>
        <br />

        <div style={{ height: '300px' }}>
          <StackedBarChart />
        </div>
        <br />

        <div style={{ height: '300px' }}>
          <AreaChart />
        </div>
        <br />

        <div style={{ height: '300px' }}>
          <PieChart />
        </div>
        <br />

        <div style={{ height: '300px' }}>
          <DoughnutChart />
        </div>
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
