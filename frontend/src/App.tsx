import React, { useState } from 'react';
import 'antd/dist/reset.css';
import './App.css';
import MilkBoard from './componennts/MilkBoard';
import {Input} from 'antd'
import Filter from './componennts/Filter';
import {database} from './database'
import { Model } from './model'

function App() {
  const [data] = useState<Model>(database)
  const [page, setPage] = useState<number>(1)
  const [filteredList, setFilteredList] = useState<string[]>([])
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
      <MilkBoard page={page} setPage={setPage} data={data} filteredList={filteredList} />
    </main>
    </>
  );
}

export default App;
