import React from 'react'
import { Pie } from 'react-chartjs-2'

const data = {
  labels: ['Human', 'Humanoid', 'Alien', 'Poopybutthole', 'Mythological Creature', 'Animal', 'Robot', 'Cronenberg', 'Disease'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3, 5, 7, 344],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 179, 32, 0.2)',
        'rgba(175, 230, 32, 0.2)',
        'rgba(196, 130, 32, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 179, 32, 1)',
        'rgba(175, 230, 32, 1)',
        'rgba(196, 130, 32, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

export default function PieChart() {
  return(
    <Pie data={data} />
  )
}