
import './App.css'
import React, { useState } from 'react'

import logo from './bilder/svamp.svg'
import star from './bilder/star.svg'
import palette from './bilder/color.svg'
import mushroomIcon from './bilder/minisvamp.svg'
import varningIcon from './bilder/varning.svg'

import MushroomList from './components/MushroomList'
import MushroomInfo from './components/MushroomInfo'
import MushroomDetails from './components/MushroomDetails'
import mushroom from './MushroomDatabase.json'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App () {
  return (

    <Router>
      <div>
        <div>
          <img className='logo' src={logo} alt='Svampapp' />
        </div>

        <div className='varning'>
          <img className='varningImage' src={varningIcon} />
          <p className='varningText'>Svampar kan vara dödliga. Ät dem på egen risk.</p>
        </div>

        <Switch>
          <Route path='/swedishName' children={<MushroomDetails />} />
          <Route exact path='/'>
            <MushroomList />
          </Route>
        </Switch>
        <div className='buttongroup'>
          <button className='button'><p className='alignleft'>Mest vanliga svampar</p><img className='alignright icon' src={star} /></button>
          <button className='button'><p className='alignleft'>Sök efter färg</p><img className='alignright icon' src={palette} /></button>
          <button className='button'><p className='alignleft'>Sök efter form</p><img className='alignright icon' src={mushroomIcon} /></button>
        </div>
      </div>
    </Router>
  )
}

console.log(mushroom)

export default App
