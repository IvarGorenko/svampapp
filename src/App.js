
import './App.css'

import logo from './bilder/svamp.svg'
import star from './bilder/star.svg'
import palette from './bilder/color.svg'
import mushroomIcon from './bilder/minisvamp.svg'
import varningIcon from './bilder/varning.svg'
import searchIcon from './bilder/search.svg'

import MushroomList from './components/MushroomList'
import MushroomDetails from './components/MushroomDetails'
import MushroomListPopular from './components/MushroomListPopular'
import MushroomColor from './components/MushroomColor'
import MushroomListColor from './components/MushroomListColor'
import MushroomForm from './components/MushroomForm'
import MushroomListForm from './components/MushroomListForm'

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
          <Route path='/mushroom/:swedishName/:route'>
            <MushroomDetails />
          </Route>
          <Route exact path='/search'>
            <MushroomList />
          </Route>

          <Route exact path='/popular'>
            <MushroomListPopular />
          </Route>

          <Route exact path='/form'>
            <MushroomForm />
          </Route>
          <Route exact path='(/:form)'>
            <MushroomListForm />
          </Route>

          <Route exact path='/color'>
            <MushroomColor />
          </Route>
          <Route exact path='/:color'>
            <MushroomListColor />
          </Route>

          <Route exact path='/'>

            <div>
              <img className='logo' src={logo} alt='Svampapp' />
            </div>

            <div className='varning'>
              <img className='varningImage' src={varningIcon} alt='Varning' />
              <p className='varningText'>Svampar kan vara dödliga. Ät dem på egen risk.</p>
            </div>
            <div className='superButtongroup'>
              <Link to='/search'>
                <button className='searchBar'><p className='alignleft'>Sök efter svampar...</p><img className='alignright icon' src={searchIcon} alt='search' /></button>
              </Link>
              <div className='buttongroup'>
                <Link to='/popular'>
                  <button className='button'><p className='alignleft'>Mest vanliga svampar</p><img className='alignright icon' src={star} alt='star' /></button>
                </Link>
                <Link to='/color'>
                  <button className='button'><p className='alignleft'>Sök efter färg</p><img className='alignright icon' src={palette} alt='color' /></button>
                </Link>
                <Link to='/form'>
                  <button className='button'><p className='alignleft'>Sök efter form</p><img className='alignright icon' src={mushroomIcon} alt='icon' /></button>
                </Link>
              </div>
            </div>
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

export default App
