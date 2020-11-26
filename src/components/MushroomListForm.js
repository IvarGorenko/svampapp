import mushroom from '../MushroomDatabase.json'
import MushroomInfo from './MushroomInfo'
import { Link, useParams } from 'react-router-dom'
import backButton from '../bilder/backButton.svg'
import home from '../bilder/home.svg'

function MushroomListForm () { // när man vill trigga om rendering useState
  const form = useParams().form

  const match = mushroom => {
    const mushroomForm = mushroom.nonScGroupValue
    return mushroomForm === form
  }

  let url = window.location.href
  url = url.split('/')
  const string = url[url.length - 1]

  return (
    // Autofocus funkar inte alltid
    <div>
      <div className='searchBar1'>
        <Link to='/form'>
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
        {mushroom.filter(match).map((mushroom, i) => (<MushroomInfo key={mushroom.id} data={mushroom} from={string} />))}
      </div>
    </div>

  )
}
export default MushroomListForm
