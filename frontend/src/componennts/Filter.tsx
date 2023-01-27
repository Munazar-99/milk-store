import React from 'react'
import { database } from '../database'
import { Dropdown, Space, Typography } from 'antd'
import { FilterTwoTone } from '@ant-design/icons'


function Filter({ setFilteredList, setPage }: {
  setFilteredList: React.Dispatch<React.SetStateAction<string[]>>,
  setPage: React.Dispatch<React.SetStateAction<number>>
}) {
  const items = database.results
    .map(milk => milk.type)
    .filter((milkType, index, self) => self.indexOf(milkType) === index)
    .map((milkType) => { return { key: milkType, label: milkType } })


  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        multiple: true,
        onSelect: (item) => {
        setFilteredList(item.selectedKeys)
        setPage(1)
        },
        onDeselect: (item) => {
          setFilteredList(item.selectedKeys)
          setPage(1)
          },
      }}
      trigger={['hover', 'click']}
      arrow
    >
      <Typography.Link>
        <Space size='small'>
          Filter
          <FilterTwoTone  />
        </Space>
      </Typography.Link>
    </Dropdown>
  )
}

export default Filter
