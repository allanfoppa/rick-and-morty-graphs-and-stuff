import React from 'react'
import PropTypes from 'prop-types'

import { PolarArea } from 'react-chartjs-2'


export default function PolarChart({polarChartContent}) {

  const data = {
    labels: ['Female', 'Male', 'Genderless', 'Unknown'],
    datasets: [
      {
        data: [
          polarChartContent.female,
          polarChartContent.male,
          polarChartContent.genderless,
          polarChartContent.unknown,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return(
    <PolarArea data={data} />
  )
}

PolarChart.propTypes = {
  polarChartContent: PropTypes.object.isRequired
}