import backButton from '../bilder/backButton.svg'
import '../Color.css'
import { Link } from 'react-router-dom'

function MushroomColor () {
  return (

    <div className='nav'>
      <Link to='/'>
        <img className='backButton' src={backButton} alt='backButton' />
      </Link>
      <h2 className='headerColor'>Vilken färg har svampen?</h2>

      <Link to='/color/white'>
        <div className='item'>
          <div className='block' id='white' />
          <span className='caption'>White</span>
        </div>
      </Link>
      <Link to='/color/gray'>
        <div className='item'>
          <div className='block' id='gray' />
          <span className='caption'>Gray</span>
        </div>
      </Link>
      <Link to='/color/yellow'>
        <div className='item'>
          <div className='block' id='yellow' />
          <span className='caption'>Yellow</span>
        </div>
      </Link>
      <Link to='/color/brown'>
        <div className='item'>
          <div className='block' id='brown' />
          <span className='caption'>Brown</span>
        </div>
      </Link>
      <Link to='/color/orange'>
        <div className='item'>
          <div className='block' id='orange' />
          <span className='caption'>Orange</span>
        </div>
      </Link>
      <Link to='/color/green'>
        <div className='item'>
          <div className='block' id='green' />
          <span className='caption'>Green</span>
        </div>
      </Link>
      <Link to='/color/red'>
        <div className='item'>
          <div className='block' id='red' />
          <span className='caption'>Red</span>
        </div>
      </Link>
      <Link to='/color/black'>
        <div className='item'>
          <div className='block' id='black' />
          <span className='caption'>Black</span>
        </div>
      </Link>
      <Link to='/color/purple'>
        <div className='item'>
          <div className='block' id='purple' />
          <span className='caption'>Purple</span>
        </div>
      </Link>

    </div>

  )
}
export default MushroomColor
