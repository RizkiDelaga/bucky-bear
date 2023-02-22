import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 3, 4, 6, 9, 1, 4, 8, 1],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [1, 9, 2, 7, 4, 8, 1, 7, 4],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function VerticalBarChart() {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Bar options={options} data={data} />
    </Fragment>
  );
}

export default VerticalBarChart;
