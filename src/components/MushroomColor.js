import backButton from '../bilder/backButton.svg'
import '../Color.css'
import { Link } from 'react-router-dom'

function MushroomColor () {
  return (

    <div>
      <Link to='/'>
        <img className='backButton' src={backButton} alt='backButton' />
      </Link>
      <h2>Vilken färg har svampen?</h2>
      <div className='grid-container'>
        <Link to='/color/white'>
          <div className='grid-item' id='white'>
            <span className='caption'>white</span>
          </div>
        </Link>
        <Link to='/color/gray'>
          <div className='grid-item' id='gray'>gray</div>
        </Link>
        <Link to='/color/yellow'>
          <div className='grid-item' id='yellow'>yellow</div>
        </Link>
        <Link to='/color/brown'>
          <div className='grid-item' id='brown'>brown</div>
        </Link>
        <Link to='/color/orange'>
          <div className='grid-item' id='orange'>orange</div>
        </Link>
        <Link to='/color/green'>
          <div className='grid-item' id='green'>green</div>
        </Link>
        <Link to='/color/red'>
          <div className='grid-item' id='red'>red</div>
        </Link>
        <Link to='/color/black'>
          <div className='grid-item' id='black'>black</div>
        </Link>
        <Link to='/color/purple'>
          <div className='grid-item' id='purple'>purple</div>
        </Link>
      </div>
    </div>

  )
}
export default MushroomColor
