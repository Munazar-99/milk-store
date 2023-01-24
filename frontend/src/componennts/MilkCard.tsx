import React from 'react'
import image from '../assets/milk.png'
import {Result} from '../model'
import './MilkCard.css'
import 'antd/dist/reset.css';


function MilkCard({ milkInfo} : {milkInfo: Result}) {
  return (
    <article className='milk-card'>
    <img src={image} alt="" className='milk-image'/>
    <h6 className='milk-description bold'>{milkInfo.name}</h6>
    <h6 className='milk-description'>{milkInfo.type}</h6>
    </article>
  )
}

export default MilkCard
