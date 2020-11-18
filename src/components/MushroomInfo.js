import React from 'react'
import { Link } from 'react-router-dom'

function importAll (r) {
  const images = {}
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item) })
  return images
}

const MushroomInfo = ({ data }) => {
  const linken = '/search/' + data.swedishName

  const images = importAll(require.context('../bilder/svampbilder/', false, /\.(jpg)$/))
  const filenameArray = data.pictures[0].fileName.split('.')
  const filename = filenameArray[0] + '.jpg'
  const image = images[filename].default

  return (

    <Link to={linken}>
      <div className='mushroomInfo'>
        <div className='left'>
          <img className='searchImage' src={image} alt={data.swedishName} />
        </div>
        <div className='right'>
          <h2>{data.swedishName}</h2>
          <p>{data.edibilityValue}</p>
        </div>
      </div>
    </Link>

  )
}
export default MushroomInfo
