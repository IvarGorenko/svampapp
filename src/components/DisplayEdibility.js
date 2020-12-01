import edible from '../bilder/ejatbar.svg'

function displayEdibility (data) {
  if (data.edibilityValue === 'O Ej matsvamp') {
    return (
      <div>
        <img className='iconEdible' src={edible} alt='ätbarhet' />
        <span> Ej matsvamp</span>
      </div>
    )
  } else if (data.edibilityValue === '*** Läcker matsvamp') {
    return (
      <div>
        <img className='iconEdible' src='' alt='ätbarhet' />
        <span> Läcker matsvamp</span>
      </div>
    )
  } else if (data.edibilityValue === '** God matsvamp') {
    return (
      <div>
        <img className='iconEdible' src='' alt='ätbarhet' />
        <span> God matsvamp</span>
      </div>
    )
  } else if (data.edibilityValue === '* Ätlig') {
    return (
      <div>
        <img className='iconEdible' src='' alt='ätbarhet' />
        <span> Ätlig</span>
      </div>
    )
  } else if (data.edibilityValue === '† Giftig') {
    return (
      <div>
        <img className='iconEdible' src='' alt='ätbarhet' />
        <span> Giftig</span>
      </div>
    )
  } else if (data.edibilityValue === '†† Dödligt giftig') {
    return (
      <div>
        <img className='iconEdible' src='' alt='ätbarhet' />
        <span> Dödligt giftig</span>
      </div>
    )
  } else if (data.edibilityValue === '†† (***) Läcker matsvamp rätt behandlad') {
    return (
      <div>
        <img className='iconEdible' src='' alt='ätbarhet' />
        <span> Dödligt giftig <br /> (Läcker matsvamp  rätt behandlad)</span>
      </div>
    )
  } else if (data.edibilityValue === 'O (**) God matsvamp efter avkokning') {
    return (
      <div>
        <img className='iconEdible' src='' alt='ätbarhet' />
        <span> Ej matsvamp <br />(God matsvamp efter avkokning)</span>
      </div>
    )
  } else if (data.edibilityValue === 'O (*) Ätlig efter avkokning') {
    return (
      <div>
        <img className='iconEdible' src='' alt='ätbarhet' />
        <span> Ej matsvamp<br />(Ätlig efter avkokning)</span>
      </div>
    )
  } else {
    return <img className='iconEdible' src='' alt='ätbarhet' />
  }
}

export default displayEdibility
