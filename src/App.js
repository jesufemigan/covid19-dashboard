import './App.css';

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {getAllData} from './features/covid/dataSlice'

import { useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  const { data } = useSelector(state => state.data)
  useEffect(() => {
    dispatch(getAllData())
  }, [])
  console.log(data)
  return (
    <div className="App">
      <h1>COVID-19 HELPER NG</h1>
      <h2>Total Samples tested: {parseInt(data.totalSamplesTested.split(',').join(''))}</h2>
      <h2>Total number of cases in Nigeria: {data.totalConfirmedCases}</h2>
      <h2>Discharged Patients: {data.discharged}</h2>
      <h2>Number of deaths: {data.death}</h2>
      <h2>Active Cases: {data.totalActiveCases}</h2>
    </div>
  );
}

export default App;
