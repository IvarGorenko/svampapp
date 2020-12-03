import React from 'react'
import backButton from '../bilder/backButton.svg'
import '../Color.css'
import { Link } from 'react-router-dom'

function importAll (r) {
  const images = {}
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item) })
  return images
}

function MushroomForm () {
  const images = importAll(require.context('../bilder/svamplogos/', false, /\.(svg)$/))

  return (
  // Champinjoner, Tickor, Soppar, Murklor, Riskor, Kantareller och trumpetsvampar, Bläcksvampar, Kremlor, Flugsvampar, Musseroner, Taggsvampar, Musslingar, Övriga svampar
  // Musseroner saknas
    <div className='nav'>
      <div className='searchBarColor'>
        <Link to='/'>
          <img className='backButton' src={backButton} alt='backButton' />
        </Link>
      </div>
      <h2 className='headerForm'>Vilken sort är svampen?</h2>

      <div className='overblock'>
        <Link to='/form/Kantareller och trumpetsvampar'>
          <div className='item'>
            <div className='block'>
              <img className='bild' src={images['Kantareller.svg'].default} alt='' />
            </div>
            <span className='caption'>Kantareller</span>
          </div>
        </Link>

        <Link to='/form/Champinjoner'>
          <div className='item'>
            <div className='block'>
              <img className='bild' src={images['Champinjon.svg'].default} alt='' />
            </div>
            <span className='caption'>Champinjoner</span>
          </div>
        </Link>
        <Link to='/form/Skivlingar'>
          <div className='item'>
            <div className='block'>
              <img className='bild' src={images['Skivlingar.svg'].default} alt='' />
            </div>
            <span className='caption'>Skivlingar</span>
          </div>
        </Link>
        <Link to='/form/Soppar'>
          <div className='item'>
            <div className='block'>
              <img className='bild' src={images['Soppar.svg'].default} alt='' />
            </div>
            <span className='caption'>Soppar</span>
          </div>
        </Link>
        <Link to='/form/Murklor'>
          <div className='item'>
            <div className='block'>
              <img className='bild' src={images['Murklor.svg'].default} alt='' />
            </div>
            <span className='caption'>Murklor</span>
          </div>
        </Link>
        <Link to='/form/Riskor'>
          <div className='item'>
            <div className='block'>
              <img className='bild' src={images['Riskor.svg'].default} alt='' />
            </div>
            <span className='caption'>Riskor</span>
          </div>
        </Link>
        <Link to='/form/Tickor'>
          <div className='item'>
            <div className='block'>
              <img className='bild' src={images['Tickor.svg'].default} alt='' />
            </div>
            <span className='caption'>Tickor</span>
          </div>
        </Link>
        <Link to='/form/Bläcksvampar'>
          <div className='item'>
            <div className='block'>
              <img className='bild' src={images['Blacksvamp.svg'].default} alt='' />
            </div>
            <span className='caption'>Bläcksvampar</span>
          </div>
        </Link>
        <Link to='/form/Kremlor'>
          <div className='item'>
            <div className='block'>
              <img className='bild' src={images['Kremlor.svg'].default} alt='' />
            </div>
            <span className='caption'>Kremlor</span>
          </div>
        </Link>
        <Link to='/form/Flugsvampar'>
          <div className='item'>
            <div className='block'>
              <img className='bild' src={images['Flugsvamp.svg'].default} alt='' />
            </div>
            <span className='caption'>Flugsvampar</span>
          </div>
        </Link>
        <Link to='/form/Musseroner'>
          <div className='item'>
            <div className='block'>
              <img className='bild' src={images['Musseroner.svg'].default} alt='' />
            </div>
            <span className='caption'>Musseroner</span>
          </div>
        </Link>
        <Link to='/form/Taggsvampar'>
          <div className='item'>
            <div className='block'>
              <img className='bild' src={images['Taggsvampar.svg'].default} alt='' />
            </div>
            <span className='caption'>Taggsvampar</span>
          </div>
        </Link>
        <Link to='/form/Musslingar'>
          <div className='item'>
            <div className='block'>
              <img className='bild' src={images['Musslingar.svg'].default} alt='' />
            </div>
            <span className='caption'>Musslingar</span>
          </div>
        </Link>
        <Link to='/form/Övriga svampar'>
          <div className='item'>
            <div className='block'>
              <img className='bild' src={images['Ovriga.svg'].default} alt='' />
            </div>
            <span className='caption'>Övriga svampar</span>
          </div>
        </Link>
      </div>
    </div>

  )
}
export default MushroomForm
