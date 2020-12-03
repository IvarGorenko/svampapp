import React from 'react'
import '../App.css'
import notedible from '../bilder/ejatbar.svg'
import poison from '../bilder/poison.svg'
import skull from '../bilder/skull.svg'
import lacker from '../bilder/lacker.svg'
import god from '../bilder/god.svg'
import atlig from '../bilder/atlig.svg'
import pot from '../bilder/pot.svg'

function displayEdibility (data) {
  if (data.edibilityValue === 'O Ej matsvamp') {
    return (
      <div>
        <img className='iconEdible' src={notedible} alt='ätbarhet' />
        <span> Ej matsvamp</span>
      </div>
    )
  } else if (data.edibilityValue === '*** Läcker matsvamp') {
    return (
      <div>
        <img className='iconEdible' src={lacker} alt='ätbarhet' />
        <span> Läcker matsvamp</span>
      </div>
    )
  } else if (data.edibilityValue === '** God matsvamp') {
    return (
      <div>
        <img className='iconEdible' src={god} alt='ätbarhet' />
        <span> God matsvamp</span>
      </div>
    )
  } else if (data.edibilityValue === '* Ätlig') {
    return (
      <div>
        <img className='iconEdible' src={atlig} alt='ätbarhet' />
        <span> Ätlig</span>
      </div>
    )
  } else if (data.edibilityValue === '† Giftig') {
    return (
      <div>
        <img className='iconEdible' src={poison} alt='ätbarhet' />
        <span> Giftig</span>
      </div>
    )
  } else if (data.edibilityValue === '†† Dödligt giftig') {
    return (
      <div>
        <img className='iconEdible' src={skull} alt='ätbarhet' />
        <span> Dödligt giftig</span>
      </div>
    )
  } else if (data.edibilityValue === '†† (***) Läcker matsvamp rätt behandlad') {
    return (
      <div>
        <img className='iconEdible' id='poticon' src={pot} alt='ätbarhet' />
        <span><br /> Dödligt giftig <br />(Läcker matsvamp rätt behandlad)</span>
      </div>
    )
  } else if (data.edibilityValue === 'O (**) God matsvamp efter avkokning') {
    return (
      <div>
        <img className='iconEdible' id='poticon' src={pot} alt='ätbarhet' />
        <span> Ej matsvamp <br />(God matsvamp efter avkokning)</span>
      </div>
    )
  } else if (data.edibilityValue === 'O (*) Ätlig efter avkokning') {
    return (
      <div>
        <img className='iconEdible' id='poticon' src={pot} alt='ätbarhet' />
        <span> Ej matsvamp<br />(Ätlig efter avkokning)</span>
      </div>
    )
  } else {
    return <img className='iconEdible' src='' alt='ätbarhet' />
  }
}

export default displayEdibility
