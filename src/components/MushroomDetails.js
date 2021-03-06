import React from 'react'
import { Link, useParams } from 'react-router-dom'
import mushroom from '../MushroomDatabase.json'
import backButton from '../bilder/backButton.svg'
import home from '../bilder/home.svg'
import displayEdibility from './DisplayEdibility'

function getMushroomByName (mushroomName) {
  const found = mushroom.find(element => element.swedishName === mushroomName)
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
  const { swedishName, route } = useParams()

  let url = window.location.href
  url = url.split('/')
  // const from = url[url.length - 1]
  let link = route

  if (url[url.length - 2] === 'color') {
    link = url[url.length - 2] + '/' + url[url.length - 1]
  } else if (url[url.length - 2] === 'form') {
    link = url[url.length - 2] + '/' + url[url.length - 1]
  }

  // console.log(link)
  // console.log(url[5])
  const mushroomdata = getMushroomByName(swedishName)

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

  // Laggar efter men funkar
  function displayImage () {
    // Get the modal
    var modal = document.getElementById('myModal')
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('myImg')
    var modalImg = document.getElementById('img01')
    var captionText = document.getElementById('caption')
    img.onclick = function () {
      modal.style.display = 'block'
      modalImg.src = this.src
      captionText.innerHTML = mushroomdata.swedishName
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close')[0]

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = 'none'
    }
  }

  return (
    <div>
      <div className='searchBar1'>
        <Link to={'/' + link}>
          <img className='backButton' src={backButton} alt='backButton' />
        </Link>
        <Link to={'/' + link}>
          <input className='searchBarTop' type='text' placeholder='Sök efter svamp' name='title' />
        </Link>
        <Link to='/'>
          <img className='homeButton' src={home} alt='backButton' />
        </Link>
      </div>
      <div className='mushroomDetails'>
        <div className='Info list'>
          <div className='leftSida3'>
            <div className='mushroomPicture'>
              <img id='myImg' className='picture' src={image} alt='logo' onClick={() => displayImage()} />
              <div id='myModal' className='modal'>
                <span className='close'>&times;</span>
                <img className='model-content' id='img01' alt='' />
                <div id='caption' />
              </div>
            </div>
          </div>
          <div className='rightSida3'>
            <div className='mushroomName'>
              <h4>{mushroomdata.swedishName} </h4>
              <h4>Latin: {mushroomdata.scientificName} </h4>
            </div>
          </div>
        </div>
        <h4>{displayEdibility(mushroomdata)}</h4>
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
// {mushroomdata.edibilityValue}
export default MushroomDetails
