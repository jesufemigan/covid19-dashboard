import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { useState } from 'react'

import { useSelector } from 'react-redux'
import { notEmptyObject } from '../utils'

const DoughnutChart = () => {
  const { data } = useSelector(state => state.data)
  
  const [stateData, setStateData] = useState({
    labels: [
      "ActiveCases",
      "ConfirmedCases",
      "Deaths",
      "Discharged"
    ],
    datasets: [{
      data: notEmptyObject(data) && [data.totalActiveCases, data.totalConfirmedCases, data.death, data.discharged],
      backgroundColor: [
        "#5800FF",
        "#0096FF",
        "#00D7FF",
        "#72FFFF"
      ]
    }]
  })
  return (
    <Doughnut data={stateData}/>
  )
}
export default DoughnutChart