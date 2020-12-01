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
      <div className='overblock'>
        <Link to='/vit'>
          <div className='item'>
            <div className='block' id='white' />
            <span className='caption'>Vit</span>
          </div>
        </Link>
        <Link to='/grå'>
          <div className='item'>
            <div className='block' id='gray' />
            <span className='caption'>Grå</span>
          </div>
        </Link>
        <Link to='/gul'>
          <div className='item'>
            <div className='block' id='yellow' />
            <span className='caption'>Gul</span>
          </div>
        </Link>
        <Link to='/brun'>
          <div className='item'>
            <div className='block' id='brown' />
            <span className='caption'>Brun</span>
          </div>
        </Link>
        <Link to='/orange'>
          <div className='item'>
            <div className='block' id='orange' />
            <span className='caption'>Orange</span>
          </div>
        </Link>
        <Link to='/grön'>
          <div className='item'>
            <div className='block' id='green' />
            <span className='caption'>Grön</span>
          </div>
        </Link>
        <Link to='/röd'>
          <div className='item'>
            <div className='block' id='red' />
            <span className='caption'>Röd</span>
          </div>
        </Link>
        <Link to='/svart'>
          <div className='item'>
            <div className='block' id='black' />
            <span className='caption'>Svart</span>
          </div>
        </Link>
        <Link to='/lila'>
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
