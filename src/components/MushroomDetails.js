import React from 'react'
import { Link, useParams } from 'react-router-dom'
import mushroom from '../MushroomDatabase.json'
import backButton from '../bilder/backButton.svg'
import home from '../bilder/home.svg'

function getMushroomByName (mushroomName) {
  const found = mushroom.find(element => element.swedishName === mushroomName)

  // console.log(found)
  return (
    found
  )
}

function importAll (r) {
  const images = {}
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item) })
  return images
}

function MushroomDetails () {
  const mushroomdata = getMushroomByName(useParams().swedishName)

  let colorArray = mushroomdata.color.map(x => x)

  if (colorArray.length === 1) {
    colorArray = colorArray[0]
  } else if (colorArray.length === 2) {
    colorArray = colorArray[0] + ', ' + colorArray[1]
  } else if (colorArray.length === 3) {
    colorArray = colorArray[0] + ', ' + colorArray[1] + ', ' + colorArray[2]
  } else if (colorArray.length === 4) {
    colorArray = colorArray[0] + ', ' + colorArray[1] + ', ' + colorArray[2] + ', ' + colorArray[3]
  } else if (colorArray.length === 5) {
    colorArray = colorArray[0] + ', ' + colorArray[1] + ', ' + colorArray[2] + ', ' + colorArray[3] + ', ' + colorArray[4]
  }

  const images = importAll(require.context('../bilder/svampbilder/', false, /\.(jpg)$/))
  const filenameArray = mushroomdata.pictures[0].fileName.split('.')
  const filename = filenameArray[0] + '.jpg'
  const image = images[filename].default

  return (/* behöver fixa så att det länkar tillbaka till color eller sort beroende på vart vi är innan */
    <div>
      <div className='searchBar1'>
        <Link to='/search'>
          <img className='backButton' src={backButton} alt='backButton' />
        </Link>
        <Link to='/search'>
          <input className='searchBarTop' type='text' placeholder='Sök efter svamp' name='title' />
        </Link>
        <Link to='/'>
          <img className='backButton' src={home} alt='backButton' />
        </Link>
      </div>
      <div className='mushroomDetails'>
        <div className='Info list'>
          <div className='leftSida3'>
            <div className='mushroomPicture'>
              <img className='picture' src={image} alt='logo' />
            </div>
          </div>
          <div className='rightSida3'>
            <div className='mushroomName'>
              <h4>{mushroomdata.swedishName} </h4>
              <h4>Latin: {mushroomdata.scientificName} </h4>
              <h4>{mushroomdata.edibilityValue} </h4>
            </div>
          </div>
        </div>
        <div className='mushroomDescription'>
          <h4 className='shortDescription'>Kort beskrivning</h4>
          <p className='shortDescription'>Sort: {mushroomdata.nonScGroupValue}</p>
          <p className='shortDescription'>Färg: {colorArray}</p>
          <p className='shortDescription'>Växtplats: {mushroomdata.vegetation}</p>
        </div>
        <div className='mushroomDescription'>
          <h4 className='shortDescription'>Beskrivning</h4>
          <p className='shortDescription' dangerouslySetInnerHTML={{ __html: mushroomdata.description }} />
        </div>
      </div>
    </div>
  )
}

export default MushroomDetails
