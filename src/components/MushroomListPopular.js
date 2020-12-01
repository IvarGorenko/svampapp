import mushroom from '../MushroomDatabase.json'
import MushroomInfo from './MushroomInfo'
import { Link } from 'react-router-dom'
import backButton from '../bilder/backButton.svg'
import home from '../bilder/home.svg'
import FuzzySearch from 'fuzzy-search'
import React, { useState } from 'react'

const searcher = new FuzzySearch(mushroom, ['swedishName'], {
  caseSensitive: false
})

function MushroomListPopular () { // när man vill trigga om rendering useState
  const match = mushroom => {
    const edibleMushroom = mushroom.edibility // edibleMushroom är en int

    return edibleMushroom === 100 // bästa värdet på edibility i databas är 100
  }

  const [searchString, setSearchString] = useState('')
  const matched = searcher.search(searchString)

  let url = window.location.href
  url = url.split('/')
  const string = url[url.length - 1]

  return (
    <div>
      <div className='searchBar1'>
        <Link to='/'>
          <img className='backButton' src={backButton} alt='backButton' />
        </Link>
        <input className='searchBarTop' type='text' placeholder='Sök efter svamp' name='title' onChange={event => setSearchString(event.target.value)} />
        <Link to='/'>
          <img className='homeButton' src={home} alt='backButton' />
        </Link>
      </div>
      <div className='list'>
        {matched.filter(match).map((mushroom, i) => (<MushroomInfo key={mushroom.id} data={mushroom} from={string} />))}
      </div>
    </div>

  )
}
export default MushroomListPopular
