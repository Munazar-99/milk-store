import React, { useEffect, useState } from 'react';
import 'antd/dist/reset.css';
import './App.css';
import MilkBoard from './componennts/MilkBoard';
import {Input} from 'antd'
import Filter from './componennts/Filter';
import { Model } from './model'

function App() {
  const [data, setData] = useState<Model>()
  const [page, setPage] = useState<number>(1)
  const [filteredList, setFilteredList] = useState<string[]>([])
  useEffect(() => {
    if(typeof(process.env.REACT_APP_URL) === 'string') {
      fetch(process.env.REACT_APP_URL)
      .then(response => response.json())
      .then(res => setData(res) )
      .catch(err => console.log(err.message))
    }
  }, [])
  return (
    <>
    <header className='heading'>
      <h2 className='heading-title'>THE MILK STORE</h2>
    </header>
    <main className='main-display'>
      <section className='utilities'>
      <Input.Search   type="text" placeholder='Search' onSearch={() => console.log('heeeey')} className='search-field' />
      < Filter setPage={setPage}   setFilteredList={setFilteredList} />
      </section>
      {data && <MilkBoard page={page} setPage={setPage} data={data} filteredList={filteredList} />}
    </main>
    </>
  );
}

export default App;
