import React from 'react'
import backButton from '../bilder/backButton.svg'
import '../Color.css'
import { Link } from 'react-router-dom'

function MushroomColor () {
  return (

    <div className='nav'>
      <div className='searchBarColor'>
        <Link to='/'>
          <img className='backButton' src={backButton} alt='backButton' />
        </Link>
      </div>
      <h2 className='headerColor'>Vilken färg har svampen?</h2>
      <div className='overblock'>
        <Link to='/color/vit'>
          <div className='item'>
            <div className='block' id='white' />
            <span className='caption'>Vit</span>
          </div>
        </Link>
        <Link to='/color/grå'>
          <div className='item'>
            <div className='block' id='gray' />
            <span className='caption'>Grå</span>
          </div>
        </Link>
        <Link to='/color/gul'>
          <div className='item'>
            <div className='block' id='yellow' />
            <span className='caption'>Gul</span>
          </div>
        </Link>
        <Link to='/color/brun'>
          <div className='item'>
            <div className='block' id='brown' />
            <span className='caption'>Brun</span>
          </div>
        </Link>
        <Link to='/color/orange'>
          <div className='item'>
            <div className='block' id='orange' />
            <span className='caption'>Orange</span>
          </div>
        </Link>
        <Link to='/color/grön'>
          <div className='item'>
            <div className='block' id='green' />
            <span className='caption'>Grön</span>
          </div>
        </Link>
        <Link to='/color/röd'>
          <div className='item'>
            <div className='block' id='red' />
            <span className='caption'>Röd</span>
          </div>
        </Link>
        <Link to='/color/svart'>
          <div className='item'>
            <div className='block' id='black' />
            <span className='caption'>Svart</span>
          </div>
        </Link>
        <Link to='/color/lila'>
          <div className='item'>
            <div className='block' id='purple' />
            <span className='caption'>Lila</span>
          </div>
        </Link>
      </div>

    </div>

  )
}
export default MushroomColor
