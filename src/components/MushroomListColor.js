import mushroom from '../MushroomDatabase.json'
import MushroomInfo from './MushroomInfo'
import { Link, useParams } from 'react-router-dom'
import backButton from '../bilder/backButton.svg'
import home from '../bilder/home.svg'

function MushroomListColor () { // när man vill trigga om rendering useState
  const color = useParams().color
  const match = mushroom => {
    let mushroomColor = mushroom.color.toString() // behöver också söka på färg på nått sätt
    mushroomColor = mushroomColor.split(',')

    // mushroomColor = mushroomColor.forEach(element => element.find(element => element === 'brown')) // funkar inte
    // return mushroomColor

    for (let index = 0; index < mushroomColor.length; index++) { // DEN HÄR FOR-LOOPEN FUNKAR
      if (mushroomColor.find(element => element === color)) {
        return mushroomColor
      }
    }
  }

  let url = window.location.href
  url = url.split('/')
  const string = url[url.length - 1]
  console.log(string)

  return (
    // Autofocus funkar inte alltid
    <div>
      <div className='searchBar1'>
        <Link to='/color'>
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
export default MushroomListColor
