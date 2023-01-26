import React from 'react'
import image from '../assets/milk.png'
import {Result} from '../model'
import './MilkCard.css'
import 'antd/dist/reset.css';


function MilkCard({ milkInfo} : {milkInfo: Result}) {
  return (
    <article className='milk-card'>
    <img src={image} alt="" className='milk-image'/>
    <h5 className='milk-name bold'>{milkInfo.name.split(' ').slice(0,2).join(' ')}</h5>
    <section className='milk-details'>
    <h6 className='milk-type'>{milkInfo.type}</h6>
    <h6 className='milk-quatity'>{milkInfo.storage}</h6>
    </section>
    </article>
  )
}

export default MilkCard
