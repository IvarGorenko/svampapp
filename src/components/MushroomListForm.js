import mushroom from '../MushroomDatabase.json'
import MushroomInfo from './MushroomInfo'
import { Link, useParams } from 'react-router-dom'
import backButton from '../bilder/backButton.svg'
import home from '../bilder/home.svg'
import FuzzySearch from 'fuzzy-search'
import React, { useState } from 'react'

const searcher = new FuzzySearch(mushroom, ['swedishName'], {
  caseSensitive: false
})

function MushroomListForm () { // när man vill trigga om rendering useState
  const form = useParams().form

  const [searchString, setSearchString] = useState('')
  const matched = searcher.search(searchString)

  const match = mushroom => {
    const mushroomForm = mushroom.nonScGroupValue
    return mushroomForm === form
  }

  let url = window.location.href
  url = url.split('/')
  const from = url[url.length - 2] + '/' + url[url.length - 1]
  // console.log(from)

  return (
    <div>
      <div className='searchBar1'>
        <Link to='/form'>
          <img className='backButton' src={backButton} alt='backButton' />
        </Link>
        <input className='searchBarTop' type='text' placeholder='Sök efter svamp' name='title' onChange={event => setSearchString(event.target.value)} />
        <Link to='/'>
          <img className='homeButton' src={home} alt='backButton' />
        </Link>
      </div>
      <div className='list'>
        {matched.filter(match).map((mushroom, i) => (<MushroomInfo key={mushroom.id} data={mushroom} from={from} />))}
      </div>
    </div>

  )
}
export default MushroomListForm
