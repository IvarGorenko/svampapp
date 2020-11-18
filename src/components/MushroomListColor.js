import React, { useState } from 'react'
import mushroom from '../MushroomDatabase.json'
import MushroomInfo from './MushroomInfo'
import { Link } from 'react-router-dom'
import backButton from '../bilder/backButton.svg'

function MushroomListColor () { // när man vill trigga om rendering useState
  const match = mushroom => {
    let mushroomColor = mushroom.color.toString() // behöver också söka på färg på nått sätt
    mushroomColor = mushroomColor.split(',')
    console.log(mushroomColor)

    mushroomColor = mushroomColor.forEach(element => element.find(element => element === 'brown')) // funkar inte
    return mushroomColor

    // for (let index = 0; index < mushroomColor.length; index++) { // DEN HÄR FOR-LOOPEN FUNKAR
    //   if (mushroomColor.find(element => element === 'brown')) {
    //     return mushroomColor
    //   }
    // }
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
      </div>
      <div>
        {mushroom.filter(match).map((mushroom, i) => (<MushroomInfo key={mushroom.id} data={mushroom} />))}
      </div>
    </div>

  )
}
export default MushroomListColor
