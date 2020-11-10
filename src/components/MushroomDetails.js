import React from 'react'
import { Link, useParams } from 'react-router-dom'
import mushroom from '../MushroomDatabase.json'
import backButton from '../bilder/backButton.svg'
import logo from '../bilder/svamp.svg'

function getMushroomByName (mushroomName) {
  const found = mushroom.find(element => element.swedishName === mushroomName)
  // console.log(found)
  return (
    found
  )
}
function MushroomDetails () {
  const mushroomdata = getMushroomByName(useParams().swedishName)
  return (
    <div>
      <Link to='/search'>
        <img className='backButton' src={backButton} alt='backButton' />
      </Link>
      <div className='mushroomDetails'>
        <div className='mushroomPicture'>
          <img src={logo} alt='logo' />
        </div>
        <div className='mushroomName'>
          <h4>{mushroomdata.swedishName} </h4>
          <h4>Latin: {mushroomdata.scientificName} </h4>
        </div>
        <div className='mushroomDescription' dangerouslySetInnerHTML={{ __html: mushroomdata.description }} />
      </div>
    </div>
  )
}

export default MushroomDetails
// <Link to='/search'>back</Link>
