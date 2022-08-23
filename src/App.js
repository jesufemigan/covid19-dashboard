import React from 'react'
import './App.css';

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllData } from './features/covid/dataSlice'

import { useSelector } from 'react-redux'
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import CardCollection from './components/CardCollection'

import Spinner from './components/Spinner';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllData())
  }, [dispatch])
  
  const { isLoading, data } = useSelector(state => state.data)

  if (isLoading) return <Spinner />  
  return (
    <div className="App">
      <h1 style={{ padding: '0 0 50px', fontSize: 24, color: 'rgb(44,49,60)',}}>Covid19 Helper Dashboard</h1>
      <div className='first-section'>
        <CardCollection size={25}/>
      </div>
      <div className="second-section">
        <div className="bar">
          <BarChart />
        </div>
        <div className="dough">
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}

export default App;
