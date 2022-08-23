import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

import { useState } from 'react'

import { useSelector } from 'react-redux'
import { notEmptyObject } from '../utils'

const BarChart = () => {
  const { data } = useSelector(state => state.data)
  
  const [stateData, setStateData] = useState({
    labels: notEmptyObject(data) && data.states.map((state) => state.state),
    datasets: [
      {
        label: "Confirmed Cases",
        data: notEmptyObject(data) && data.states.map((state) => state.confirmedCases),
        backgroundColor: ["#5800FF"]
      },
      {
        label: "Discharged",
        data: notEmptyObject(data) && data.states.map((state) => state.discharged),
        backgroundColor: ["#72FFFF"]
      },
      {
        label: "Deaths",
        data:  notEmptyObject(data) && data.states.map((state => state.death)),
        backgroundColor: ["#0096FF"]
      }
    ]
  })
  
  return (
    <div style={{ width: '100%' }}>
      <Bar data={stateData} />
    </div>
  )
}
export default BarChart