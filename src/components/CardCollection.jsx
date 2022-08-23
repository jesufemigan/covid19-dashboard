import React from "react"
import Card from "./Card/Card"


import { BiTestTube } from 'react-icons/bi'
import { GiConfirmed, GiTombstone, GiWalk } from 'react-icons/gi'
import { MdSick } from 'react-icons/md'

import { useSelector } from 'react-redux'
import {notEmptyObject} from '../utils'

const CardCollection = ({size}) => {
  const { data } = useSelector(state => state.data)

  const { totalSamplesTested, totalConfirmedCases, discharged, totalActiveCases, death } = data

  return (
    notEmptyObject(data) && <>
      <Card name="Samples Tested" number={parseInt(totalSamplesTested.split(',').join(''))} bgColor="rgb(194,204,226)" textColor="black)" icon={<BiTestTube size={size}/>}/>
      <Card name="Confirmed Cases" number={totalConfirmedCases} bgColor="rgb(244, 247, 253)" textColor="rgb(40,93,200)" icon={<GiConfirmed size={size}/>}/>
      <Card name="Patients Discharge" number={discharged} bgColor="rgb(242,250,255)" textColor="rgb(13,147,247)" icon={<GiWalk size={size}/>}/>
      <Card name="Active Cases" number={totalActiveCases} bgColor="rgb(255,247,243)" textColor="rgb(245, 125,46)" icon={<MdSick size={size}/>}/>
      <Card name="Deaths" number={death} bgColor="rgb(249,249,249)" textColor="rgb(255,109,6)" icon={<GiTombstone size={size}/>}/>
    </>
  )
}
export default CardCollection