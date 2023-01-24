import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import MilkBoard from './componennts/MilkBoard';
import {Input} from 'antd'

function App() {
  return (
    <>
    <header className='heading'>
      <h2 className='heading-title'>THE MILK STORE</h2>
    </header>
    <main className='main-display'>
      <section className='utilities'>
      <Input.Search type="text" placeholder='Search' onSearch={() => console.log('heeeey')} className='search-field' />
      <h5 className='filter'>Filter</h5>
      </section>
      <MilkBoard />
    </main>
    </>
  );
}

export default App;
