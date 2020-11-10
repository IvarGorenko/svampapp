
import './App.css'
// import React, { useState } from 'react'

import logo from './bilder/svamp.svg'
import star from './bilder/star.svg'
import palette from './bilder/color.svg'
import mushroomIcon from './bilder/minisvamp.svg'
import varningIcon from './bilder/varning.svg'

import MushroomList from './components/MushroomList'
// import MushroomInfo from './components/MushroomInfo'
import MushroomDetails from './components/MushroomDetails'
import mushroom from './MushroomDatabase.json'
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App () {
  return (

    <Router>
      <div>
        <Switch>
          <Route path='/search/:swedishName'>
            <MushroomDetails />
          </Route>
          <Route exact path='/search'>
            <MushroomList />
          </Route>
          <Route exact path='/'>
            <div>
              <img className='logo' src={logo} alt='Svampapp' />
            </div>

            <div className='varning'>
              <img className='varningImage' src={varningIcon} alt='Varning' />
              <p className='varningText'>Svampar kan vara dödliga. Ät dem på egen risk.</p>
            </div>
            <Link to='/search'>
              <input className='searchBar' type='text' placeholder='Sök efter svamp' name='title' />
            </Link>
            <div className='buttongroup'>
              <button className='button'><p className='alignleft'>Mest vanliga svampar</p><img className='alignright icon' src={star} alt='star' /></button>
              <button className='button'><p className='alignleft'>Sök efter färg</p><img className='alignright icon' src={palette} alt='color' /></button>
              <button className='button'><p className='alignleft'>Sök efter form</p><img className='alignright icon' src={mushroomIcon} alt='icon' /></button>
            </div>
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

console.log(mushroom)

export default App
