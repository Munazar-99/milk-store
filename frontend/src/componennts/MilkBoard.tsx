import React, { useState } from 'react'
import {database} from '../database'
import { Model } from '../model'
import './MilkBoard.css'
import MilkCard from './MilkCard'
import 'antd/dist/reset.css';
import {Pagination} from 'antd'

function MilkBoard() {
  const [data] = useState<Model>(database)
  return (
    <>
    <section className='milk-board'>
      {data.results.slice(1,10).map((milkInfo) => {
        console.log(milkInfo)
        return (
          <MilkCard milkInfo={milkInfo} key={milkInfo.id}/>
        )
      })}
    </section>
    <Pagination  defaultCurrent={1} total={100} onChange={(current) => console.log(current)}/>
    </>

  )
}

export default MilkBoard
