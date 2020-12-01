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

function MushroomListColor () {
  mushroom.sort((a, b) => a.edibility - b.edibility)

  const [searchString, setSearchString] = useState('')
  const matched = searcher.search(searchString)

  const color = useParams().color

  const match = shroom => {
    let mushroomColor = shroom.color.toString()
    mushroomColor = mushroomColor.split(',')

    for (let index = 0; index < mushroomColor.length; index++) {
      if (mushroomColor.find(element => element === color)) {
        return mushroomColor
      }
    }
  }

  let url = window.location.href
  url = url.split('/')
  const string = url[url.length - 1]
  // console.log(string)

  return (
    <div>
      <div className='searchBar1'>
        <Link to='/color'>
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
export default MushroomListColor
