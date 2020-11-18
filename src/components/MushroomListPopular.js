import mushroom from '../MushroomDatabase.json'
import MushroomInfo from './MushroomInfo'
import { Link } from 'react-router-dom'
import backButton from '../bilder/backButton.svg'

function MushroomListPopular () { // när man vill trigga om rendering useState
  const match = mushroom => {
    const edibleMushroom = mushroom.edibility // edibleMushroom är en int

    return edibleMushroom === 100 // bästa värdet på edibility i databas är 100
  }
  return (
    // Autofocus funkar inte alltid
    <div>
      <Link to='/search'>
        <div className='searchBar1'>
          <Link to='/'>
            <img className='backButton' src={backButton} alt='backButton' />
          </Link>
          <input autoFocus='autofocus' className='searchBarTop' type='text' placeholder='Sök efter svamp' name='title' />
        </div>
      </Link>
      <div>
        {mushroom.filter(match).map((mushroom, i) => (<MushroomInfo key={mushroom.id} data={mushroom} />))}
      </div>
    </div>

  )
}
export default MushroomListPopular
