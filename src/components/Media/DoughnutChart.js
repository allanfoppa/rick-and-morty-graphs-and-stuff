import PropTypes from 'prop-types'
import { Doughnut } from 'react-chartjs-2'

export default function DoughnutChart({doughnutChartContent}) {

  const data = {
    labels: ['Dead', 'Alive', 'Unknown'],
    datasets: [
      {
        data: [
          doughnutChartContent.dead,
          doughnutChartContent.alive,
          doughnutChartContent.unknown,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return(
    <Doughnut
      data={data}
      height={50}
      width={50}
    />
  )
}

DoughnutChart.propTypes = {
  doughnutChartContent: PropTypes.object.isRequired
}