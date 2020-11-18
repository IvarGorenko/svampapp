import React, { useState } from 'react'
import mushroom from '../MushroomDatabase.json'
import MushroomInfo from './MushroomInfo'
import { Link } from 'react-router-dom'
import backButton from '../bilder/backButton.svg'

function MushroomList () { // när man vill trigga om rendering useState
  const [searchString, setSearchString] = useState('')
  const match = mushroom => {
    const lowerCaseMushroom = mushroom.swedishName.toLowerCase() // behöver också söka på färg på nått sätt
    const lowerCaseSearchString = searchString.toLowerCase()

    return lowerCaseMushroom.indexOf(lowerCaseSearchString) === 0 // svårt att söka då man måste skriva exakta namnet i rätt ordning pga indexof
  }

  return (
    // Autofocus funkar inte alltid
    <div>
      <div className='searchBar1'>
        <Link to='/'>
          <img className='backButton' src={backButton} alt='backButton' />
        </Link>
        <input autoFocus='autofocus' className='searchBarTop' type='text' placeholder='Sök efter svamp' name='title' onChange={event => setSearchString(event.target.value)} />
      </div>
      <div>
        {mushroom.filter(match).map((mushroom, i) => (<MushroomInfo key={mushroom.id} data={mushroom} />))}
      </div>
    </div>

  )
}
export default MushroomList
