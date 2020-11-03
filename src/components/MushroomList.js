import React, { useState } from 'react'
import mushroom from '../MushroomDatabase.json'
import MushroomInfo from './MushroomInfo'

function MushroomList () { // när man vill trigga om rendering useState
  const [searchString, setSearchString] = useState('')
  const match = mushroom => {
    const lowerCaseMushroom = mushroom.swedishName.toLowerCase()
    const lowerCaseSearchString = searchString.toLowerCase()

    return lowerCaseMushroom.indexOf(lowerCaseSearchString) === 0
  }

  return (

    <div>
      {/* callback function: setsearchstring to change state */}
      <div className='searchDiv'>
        <input className='searchBar' type='text' placeholder ='Sök efter svamp' name='title' onChange={event => setSearchString(event.target.value)} />
      </div>
      <div>
        {mushroom.filter(match).map((mushroom, i) => (<MushroomInfo key={mushroom.id} data={mushroom} />))}
      </div>
    </div>

  )
}
export default MushroomList
