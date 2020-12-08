import React, { useState } from 'react'
import mushroom from '../MushroomDatabase.json'
import MushroomInfo from './MushroomInfo'
import { Link } from 'react-router-dom'
import backButton from '../bilder/backButton.svg'
import home from '../bilder/home.svg'
import FuzzySearch from 'fuzzy-search'

const searcher = new FuzzySearch(mushroom, ['swedishName', 'color'], {
  caseSensitive: false
})

function MushroomList () { // när man vill trigga om rendering useState
  mushroom.sort((a, b) => a.edibility - b.edibility)
  const [searchString, setSearchString] = useState('')
  const matched = searcher.search(searchString)

  let url = window.location.href
  url = url.split('/')
  const string = url[url.length - 1]
  // console.log(string)

  return (
    <div>
      <div className='searchBar1'>
        <Link to='/'>
          <img className='backButton' src={backButton} alt='backButton' />
        </Link>
        <input autoFocus='autofocus' className='searchBarTop' type='text' placeholder='Sök efter svamp' name='title' onChange={event => setSearchString(event.target.value)} />
        <Link to='/'>
          <img className='homeButton' src={home} alt='backButton' />
        </Link>
      </div>
      <div className='list'>
        {matched.map((mushroom) => (<MushroomInfo key={mushroom.id} data={mushroom} from={string} />))}
      </div>
    </div>

  )
}
export default MushroomList
