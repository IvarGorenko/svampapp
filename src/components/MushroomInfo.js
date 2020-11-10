import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../bilder/svamp.svg'

const MushroomInfo = ({ data }) => {
  const linken = '/search/' + data.swedishName
  return (

    <Link to={linken}>
      <div className='mushroomInfo'>
        <div className='left'>
          <img className='searchImage' src={logo} alt={data.swedishName} />
        </div>
        <div className='right'>
          <h2>{data.swedishName}</h2>
          <p>{data.edibilityValue}</p>
        </div>
      </div>
    </Link>

  )
}
export default MushroomInfo
