import React, { useEffect, useState } from 'react'
import { Model } from '../model'
import './MilkBoard.css'
import MilkCard from './MilkCard'
import 'antd/dist/reset.css';
import { Pagination } from 'antd'

function MilkBoard({ data,
  filteredList,
  page,
  setPage,
  searchedMilk,
}:
  {
    data: Model,
    filteredList: string[],
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    searchedMilk: string,
  }) {
  const [numberofItems, setNumberofItems] = useState<number>(100)
  const paginationHandler = (currentPage: number) => {
    setPage(currentPage)
  }
  useEffect(() => {
    setNumberofItems(data?.results
      .filter((milkInfo, index, self) => filteredList.length > 0
        ? filteredList.indexOf(milkInfo.type) !== -1
        : self)
      .filter((milkInfo) => milkInfo.name
        .split(' ')
        .slice(0, 2)
        .join(' ')
        .toLowerCase()
        .includes(searchedMilk.toLowerCase()))
      .length
    )
  }, [filteredList, data?.results, searchedMilk])

  return (
    <>
      <section className='milk-board'>
        {data?.results
          .filter((milkInfo, index, self) => filteredList.length > 0
            ? filteredList.indexOf(milkInfo.type) !== -1
            : self
          )
          .filter((milkInfo) => milkInfo.name
            .split(' ')
            .slice(0, 2)
            .join(' ')
            .toLowerCase()
            .includes(searchedMilk.toLowerCase())
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
