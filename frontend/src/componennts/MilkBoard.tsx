import React, { useState } from 'react'
import {database} from '../database'
import { Model } from '../model'
import './MilkBoard.css'
import MilkCard from './MilkCard'
import 'antd/dist/reset.css';
import {Pagination} from 'antd'

function MilkBoard() {
  const [data] = useState<Model>(database)
  const [page, setPage] = useState<number>(1)
  const paginationHandler = (currentPage: number) => {
    setPage(currentPage)
    console.log(page*10)
  }
  return (
    <>
    <section className='milk-board'>
      {data.results.slice(((page*10)-10),(page*10)).map((milkInfo) => {
        return (
          <MilkCard milkInfo={milkInfo} key={milkInfo.id}/>
        )
      })}
    </section>
    <Pagination className='page-numbers'  defaultCurrent={page} total={100} onChange={paginationHandler}/>
    </>

  )
}

export default MilkBoard
