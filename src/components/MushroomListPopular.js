import mushroom from '../MushroomDatabase.json'
import MushroomInfo from './MushroomInfo'
import { Link } from 'react-router-dom'
import backButton from '../bilder/backButton.svg'
import home from '../bilder/home.svg'

function MushroomListPopular () { // när man vill trigga om rendering useState
  const match = mushroom => {
    const edibleMushroom = mushroom.edibility // edibleMushroom är en int

    return edibleMushroom === 100 // bästa värdet på edibility i databas är 100
  }
  return (
    // Autofocus funkar inte alltid
    <div>
      <div className='searchBar1'>
        <Link to='/'>
          <img className='backButton' src={backButton} alt='backButton' />
        </Link>
        <Link to='/search'>
          <input className='searchBarTop' type='text' placeholder='Sök efter svamp' name='title' />
        </Link>
        <Link to='/'>
          <img className='backButton' src={home} alt='backButton' />
        </Link>
      </div>
      <div className='list'>
        {mushroom.filter(match).map((mushroom, i) => (<MushroomInfo key={mushroom.id} data={mushroom} />))}
      </div>
    </div>

  )
}
export default MushroomListPopular
