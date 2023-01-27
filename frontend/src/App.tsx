import React, { useEffect, useState } from 'react';
import 'antd/dist/reset.css';
import './App.css';
import MilkBoard from './componennts/MilkBoard';
import { Input, Space, Spin } from 'antd'
import Filter from './componennts/Filter';
import { Model } from './model'

function App() {
  const [data, setData] = useState<Model>()
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(true)
  const [filteredList, setFilteredList] = useState<string[]>([])
  useEffect(() => {
    if (typeof (process.env.REACT_APP_URL) === 'string') {
      fetch(`${process.env.REACT_APP_URL}`)
        .then(response => response.json())
        .then(res => setData(res))
        .catch(err => console.log(err.message))
        .finally(() => setLoading(false))
    }
  }, [])
  return (
    <>
      <header className='heading'>
        <h2 className='heading-title'>THE MILK STORE</h2>
      </header>
      <main className='main-display'>
        <section className='utilities'>
          <Input.Search type="text" placeholder='Search' onSearch={() => console.log('heeeey')} className='search-field' />
          < Filter setPage={setPage} setFilteredList={setFilteredList} />
        </section>
        {data && <MilkBoard page={page} setPage={setPage} data={data} filteredList={filteredList} />}
        {loading &&
          <section className='spinner-container'>
            <Space align='center' size="large">
              <Spin wrapperClassName='spinner' tip='Loading...' size="large" />
            </Space>
          </section>
        }
      </main>
    </>
  );
}

export default App;
