import React, { useEffect, useState } from 'react'
import { Model } from '../model'
import './MilkBoard.css'
import MilkCard from './MilkCard'
import 'antd/dist/reset.css';
import { Pagination } from 'antd'

function MilkBoard({ data,
  filteredList,
  page,
  setPage
}:
  {
    data: Model,
    filteredList: string[],
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
  }) {
  const [numberofItems, setNumberofItems] = useState<number>(100)
  const paginationHandler = (currentPage: number) => {
    setPage(currentPage)
  }
  useEffect(() => {
    setNumberofItems(data?.results.filter((milkInfo, index, self) => filteredList.length > 0
      ? filteredList.indexOf(milkInfo.type) !== -1
      : self).length
    )
  }, [filteredList, data?.results])

  return (
    <>
      <section className='milk-board'>
        {data?.results
          .filter((milkInfo, index, self) => filteredList.length > 0
            ? filteredList.indexOf(milkInfo.type) !== -1
            : self
          )
          .slice(((page * 10) - 10), (page * 10))
          .map((milkInfo, index, self) => {
            return (
              <MilkCard milkInfo={milkInfo} key={milkInfo.id} />
            )
          })}
      </section>
      <Pagination
        showSizeChanger={false}
        responsive
        className='page-numbers'
        defaultCurrent={page}
        current={page}
        total={numberofItems}
        onChange={paginationHandler}
      />
    </>

  )
}

export default MilkBoard
